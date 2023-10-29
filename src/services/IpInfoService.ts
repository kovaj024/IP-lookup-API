import IpInfoRepository from '../repositories/IpInfoRepository';
import IpInfoLookup from './IpInfoLookup';
import Cache from '../helpers/Cache';
import {IpInfo} from "../interfaces/IpInfo";

class IpInfoService {
    async lookupAndCache(ipAddress: string): Promise<IpInfo> {
        const cachedResult = await this.getCachedResult(ipAddress);
        if (cachedResult) {
            return cachedResult;
        }

        const ipInfo = await IpInfoLookup.lookup(ipAddress);

        const response = await IpInfoRepository.save({
            ipAddress: ipAddress,
            data: JSON.stringify(ipInfo),
        });

        await Cache.set(ipAddress, response, 60);

        return response;
    }

    async getCachedResult(ipAddress: string): Promise<IpInfo | null> {
        const cachedResult = await Cache.get(ipAddress);

        if (cachedResult) {
            return cachedResult;
        } else {
            const dbResult = await IpInfoRepository.findByIpAddress(ipAddress);

            if (dbResult) {
                await Cache.set(ipAddress, dbResult, 60);

                return dbResult;
            } else {
                return null;
            }
        }
    }

    async findByIpAddress(ipAddress: string) {
        try {
            return await IpInfoRepository.findByIpAddress(ipAddress);
        } catch (error: any) {
            throw new Error(`Error while looking up IP address: ${error.message}`);
        }
    }

    removeCachedResult(ipAddress: string) {
        Cache.del(ipAddress);
    }

}

export default new IpInfoService();
