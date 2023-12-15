namespace GCPL.Model {
    export class IProduct {
        Id: number;
        Name: string;
        Description: string
    }
}

namespace GCPL.Model {
    export class IPopularProduct extends IProduct {
 
    }
}

namespace GCPL.Model {
    export class IRentedProduct extends IProduct {

    }
}