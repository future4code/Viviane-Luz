import * as moment from "moment"

type event = {
    name: string,
    description: string,
    date: moment.Moment

}

let date = moment ("10/10/1987","DD/MM/YYYY").format("DD/MM/YYYY, HH:mm")
const myEvents: event [] = []
