import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY" : "51b6cf27-c83f-4c02-b500-d686fd013011"
    }
})

export const usersAPI = {
    getUsers(count = 10) {
        return instance.get(`users?count=${count}`)
            .then (response => {
                return response.data
            })
    },

    getFollowing(count = 10, page = 1 , friend) {
        return instance.get(`users?count=${count}&page=${page}&friend=${friend}`)
            .then (response => {
                return response.data
            })
    },

    postFollow(userId) {
        return instance.post(`follow/${userId}`, {})
            .then (response => {
                return response.data
            })
    },

    deleteFollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then (response => {
                return response.data
            })
    },
}

export const profileAPI = {
    putProfileInfo(data) {
        return instance.put(`profile/`, data)
    },

    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },

    setPhotos(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-type": "multipart/form-data"
            }
        })
    }
}

export const authAPI = {
    me() {
        return axios.get(`https://social-network.samuraijs.com/api/1.1/auth/me`, {
            withCredentials: true
        })
            .then (response => {
                return response.data
            })
    },

    logout() {
        return instance.post("auth/logout", {})
    },

    login(email, password, rememberMe) {
        return instance.post("auth/login", {
            email,
            password,
            rememberMe
        })
    }
}