interface Requestor {
    id?: string;
    name: string;
    phone: string;
    cell?: string;
    email: string;
    department: string;
    supervisor?: string;
    supervisorEmail?: string;
}

interface Supplier {
    firstName: string;
    lastName: string;
    companyName: string;
    title?: string;
    phone: string;
    email: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    zipcode: string;
    webPageAddress: string;
}

export { type Requestor, type Supplier };
