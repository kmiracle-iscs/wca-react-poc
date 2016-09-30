const mockData = {
    features: {
        AccountList: true
    }
};

export default class ConfigService {
    constructor() {

    }

    getConfig() {
        return new Promise(resolve => {
            setTimeout(function() {
                resolve(mockData);
            }, 6000)
        });
    }
}

ConfigService.baseUrl = 'https://api.iscs.io/api/v2/iic-ceg/';
ConfigService.apiKey = '5damt3xpd589e84ftg8bxx9n';
