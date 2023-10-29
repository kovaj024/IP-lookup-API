import axios from 'axios';

class IpInfoLookup {
    private apiUrl = 'http://ipwho.is/';

    async lookup(ipAddress: string): Promise<any> {
        try {
            const response = await axios.get(`${process.env.API_URL}${ipAddress}`);

            if (response.status === 200) {
                return response.data;
            }
        } catch (error: any) {
            throw new Error('Error during IP lookup: ' + error.message);
        }
    }
}

export default new IpInfoLookup();
