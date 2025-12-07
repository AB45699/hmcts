import {useState, useEffect} from 'react'; 
import { fetchAllCases } from '../../api';
import CaseCard from './CaseCard.jsx';

function CasesGrid() {
    const [cases, setCases] = useState([]); 

    const fetchCases = async () => {
        const fetchedCases = await fetchAllCases();

        setCases(fetchedCases)
    }

    useEffect(()=>{
        fetchCases();
    },[])

    return (
        <>
        {cases.map((fetchedCase) => {
            return <CaseCard key={fetchedCase.case_id} fetchedCase={fetchedCase}/>
        })}
        </>
    )
}

export default CasesGrid; 