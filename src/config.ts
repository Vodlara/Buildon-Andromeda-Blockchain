import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "ustars",
    name: "Anromeda House in",
    chainId: "elgafar-1",
    createdDate: "2024-10-24T19:01:01.148Z",
    modifiedDate: "2024-10-24T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            auction:
                "andr190tjxjhaxwj0fwswpehnallnespk39h055p5l535xrjd0ww9ud7qnwlqqs",
            cw721: "andr1j0qz358ltuzcjr592f38q84j28el6g9wq9z63zt3egrnr57tafvq83fdp8",
            name: "androAuction",
            type: ICollectionType.AUCTION,
            id: "embeddables-auction-1",
            featured: "ANDR1"
        },
        {
            marketplace:
                "andr1yjx4a7x3tmlkfa7zqsnlg3vv6le0xj382k2thet2xqvdn9q3dmjstm0jj8",
            cw721: "andr1p5u3yvj8533z70xvayh65ulwhs9u5equs4sngqp8k6c0atjlpcnsw0xskw",
            name: "Event tickets",
            type: ICollectionType.MARKETPLACE,
            id: "Eventtickets",
        },
        {
            crowdfund:
                "andr1vg8u24207uff6hgkffdcpm9hxpn8en8z36fs2fp9dwtfwyh4zezs86nn92",
            cw721: "andr1uvuvx5fhsgzkgk7lwcwfsgfrnf97ngq36agaau24dk2tvj895wlsqpkycs",
            name: "Crowdfund Andromeda",
            type: ICollectionType.CROWDFUND,
            id: "embeddables-crowdfund-1",
        },
        {
            exchange:
                "andr1s0p8g07x2zpcf8tejfz53qtykx39l2c8xqeehx0ep8hwn33tjtcqa0ja74",
            cw20: "andr1s0p8g07x2zpcf8tejfz53qtykx39l2c8xqeehx0ep8hwn33tjtcqa0ja74",
            name: "Aco exchange",
            type: ICollectionType.EXCHANGE,
            id: "Acoexchange",
        },
    ],
};

export default CONFIG;
