const mockData = {
    features: {
        AccountList: true
    },
    language: "english",
    translations: {
        english: {
            general: {
                welcome: "Welcome!"
            },
            account: {
                header: "Accounts",
                number: "Account Number",
                dueDt: "Due Date",
                balance: "Balance",
                due: "Due"
            }
        },
        spanish: {
            general: {
                welcome: "Bienvenido"
            },
            account: {
                header: "Cuenta",
                number: "Número de Cuenta",
                dueDt: "Fecha de Vencimiento",
                balance: "Balance",
                due: "Debido"
            }
        }
    }
};

export default class ConfigService {
    constructor() {

    }

    getConfig() {
        return new Promise(resolve => {
            setTimeout(function() {
                resolve(mockData);
            }, 1000)
        });
    }
}

ConfigService.baseUrl = 'https://api.iscs.io/api/v2/iic-ceg/';
ConfigService.apiKey = '5damt3xpd589e84ftg8bxx9n';
