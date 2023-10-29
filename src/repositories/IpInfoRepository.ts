import db from './db';
import { IpInfo } from '../interfaces/IpInfo';

class IpInfoRepository {
    async save(ipInfo: { data: string; ipAddress: string }): Promise<IpInfo> {
        return db.one<IpInfo>(
            'INSERT INTO "ip_infos"("ipAddress", "data") VALUES($1, $2) RETURNING *',
            [ipInfo.ipAddress, ipInfo.data]
        );
    }

    async findByIpAddress(ipAddress: string): Promise<IpInfo | null> {
        return db.oneOrNone<IpInfo>('SELECT * FROM "ip_infos" WHERE "ipAddress" = $1', [ipAddress]);
    }
}

export default new IpInfoRepository();
