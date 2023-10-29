import { Request, Response } from 'express';
import IpInfoService from '../services/IpInfoService';

class IpInfoController {
    async lookupAndCache(req: Request, res: Response) {
        try {
            const ipAddress = req.params.ipAddress;
            const existingIpInfo = await IpInfoService.findByIpAddress(ipAddress);

            if (existingIpInfo) {
                res.json(existingIpInfo);
            } else {
                const ipInfo = await IpInfoService.lookupAndCache(ipAddress);
                res.json(ipInfo);
            }
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }


    async getCachedResult(req: Request, res: Response) {
        try {
            const ipAddress = req.params.ipAddress;
            const cachedResult = await IpInfoService.getCachedResult(ipAddress);
            if (cachedResult) {
                res.json(cachedResult);
            } else {
                res.status(404).json({ message: 'IP not found in cache.' });
            }
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async removeCachedResult(req: Request, res: Response) {
        try {
            const ipAddress = req.params.ipAddress;
            await IpInfoService.removeCachedResult(ipAddress);
            res.json({ message: 'Cached result removed successfully.' });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default new IpInfoController();
