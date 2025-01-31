import axios from "axios";

const client = axios.create({ baseURL: "http://localhost:3000" });

export const getFiles = async () => {
    try {
        const { data } = await client.get("/files/list");
        return data;
    }
    catch (error) {
        console.error("Error fetching files", error);
        throw error?.response;
    }
};

export const getAllDataFiles = async () => {
    try {
        const { data } = await client.get(`files/data`);
        console.log('axios data:', data);
        
        return data;
    }
    catch (error) {
        console.error("Error fetching files", error);
        throw error?.response;
    }
}

export const getDataOneFile = async (filename) => {
    try {
        const { data } = await client.get(`files/data`, {
            params: { filename }
        });
        return data;
    }
    catch (error) {
        console.error("Error fetching files", error);
        throw error?.response;
    }
}   

