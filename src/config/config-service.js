import _ from 'lodash';


import { store } from '../app';

const mockData = {
    features: {
        AccountList: true,
        AgentCard: true,
        CreateJiraIssues: true,
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
            },
            policy: {
              policies: "Policies"
            },
            nav: {
                home: "Home",
                support: "Support",
                profile: "Profile",
                logout: "Logout",
                payments: "Payments",
                claims: "Claims",
                coverages: "Coverages",
                docs: "Documents & ID Cards",
                claimStatus: "View Claim Status",
                changeCoverage: "Change Coverage",
                outstandingChangeRequests: "Outstanding Change Requests",
                buyInsurance: "Buy Insurance",
                contact: "Contact"
            },
            timeline: {
                status: "Status",
                active: "Active",
                accounts: "Accounts",
                nextPaymentDue: "Next Payment Due in 4 Days",
                balance: "Your Balance",
                welcome: "Welcome",
                recentActivity: "Recent Activity"
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
            },
            policy: {
                policies: "Políticas"
            },
            nav: {
                home: "Case",
                support: "Apoyo",
                profile: "Perfil",
                logout: "Cerrar Sesión",
                payments: "Pagos",
                claims: "Reclamaciones",
                coverages: "Coberturas",
                docs: "Documentos y Tarjetas de Identificación",
                claimStatus: "Ver el estado del reclamo",
                changeCoverage: "Cambio de Cobertura",
                outstandingChangeRequests: "Solicitudes de Cambio Pendientes",
                buyInsurance: "Comprar Seguros",
                contact: "Contacto"
            },
            timeline: {
                status: "Estado",
                active: "Activo",
                accounts: "Cuentas",
                nextPaymentDue: "Siguiente pago en 4 días",
                balance: "Tu balance",
                welcome: "Bienvenido",
                recentActivity: "Actividad reciente"
            }
        }
    }
};

export const getConfig = () => {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(mockData);
        }, 500)
    });
};

export const hasConfig = () => {
    return (!_.isEmpty(store.getState().config.features));
};


export const baseUrl = 'https://api.iscs.io/api/v2/iic-ceg/';
export const apiKey = '5damt3xpd589e84ftg8bxx9n';
