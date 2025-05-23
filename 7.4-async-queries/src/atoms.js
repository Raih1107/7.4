import axios from "axios";
import { atom, selector } from "recoil";

export const notifications = atom({
    key: "networkAtom",

    default: selector({
        key : "networkAtomSelector",
        get : async () => {
            await new Promise(r => setTimeout(r,2000));
            const res = await axios.get("http://localhost:8080/notifications");
            return res.data
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})