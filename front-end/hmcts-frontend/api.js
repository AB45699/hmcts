import axios from 'axios'; 

export const fetchAllCases = async () => {
    const {data: {cases: allCases}} = await axios.get("http://localhost:9090/api/cases");

    return allCases
};

export const postCaseData = async (newCaseData) => {
    const {data} = await axios.post("http://localhost:9090/api/cases", newCaseData);
   
    return data;
}
