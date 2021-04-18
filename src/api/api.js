import * as axios from "axios";
import {followToggle} from "../redux/reducers/userReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY" : "51b6cf27-c83f-4c02-b500-d686fd013011"
    }
})

export const usersAPI = {
    getUsers() {
        return instance.get("users?count=10")
            .then (response => {
                return response.data
            })
    },

    postFollow(userId) {
        return instance.post(`follow/${userId}`, {})
            .then (response => {
                if (response.data.resultCode === 0) {
                    followToggle(userId);
                }
            })
    },

    deleteFollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then (response => {
                if (response.data.resultCode === 0) {
                    followToggle(userId);
                }
            })
    },

    changeFollow(type, id) {
        switch (type) {
            case "POST":
                return this.postFollow(id);
            case "DELETE":
                return this.deleteFollow(id);
            default:
                return;
        }
    }
}