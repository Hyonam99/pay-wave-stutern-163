import { faker } from "@faker-js/faker";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { LuUsers2 } from "react-icons/lu";
import { RiTodoLine } from "react-icons/ri";
import { MdOutlinePendingActions } from "react-icons/md";

export const random_Invoices = () => {
    return Array.from({ length: 7 }, () => {
        return {
            id: faker.string.uuid().substring(0, 3),
            client: faker.person.fullName(),
            amount: faker.number.int({min: 2400, max: 50000}),
            creationDate: "22/11/2023"
        }
    })
}

export const random_Customers = () => {
    return Array.from({ length: 4 }, () => {
        return {
            id: faker.number.int(9),
            client: faker.person.fullName(),
            email: faker.internet.email(),
            creationDate: "22/11/2023"
        }
    })
}

export const random_Transactions =[
    {
        title: "Balance",
        sub_Text: "Total balance",
        content: 53000,
        icon: FaRegMoneyBillAlt
    },
    {
        title: "Pending",
        sub_Text: "Total pending invoices",
        content: 4,
        icon: MdOutlinePendingActions
    },
    {
        title: "Invoices",
        sub_Text: "Total invoices",
        content: 15,
        icon: RiTodoLine
    },
    {
        title: "Customer",
        sub_Text: "Total customers",
        content: 24,
        icon: LuUsers2
    },
];
