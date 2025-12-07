import {useState, useEffect} from 'react'; 
import { fetchAllCases } from '../../api';
import CaseCard from './CaseCard.jsx';

function CasesGrid() {
    const [cases, setCases] = useState([]); 
    const [isLoading, setIsLoading] = useState(true); 
    const [hasErrored, setHasErrored] = useState(false); 

    const fetchCases = async () => {
        try {
            const fetchedCases = await fetchAllCases();

            setCases(fetchedCases);
            setIsLoading(false); 
            
        } catch (err) {
            setHasErrored(err); 
            setIsLoading(false);
        }
        
    };

    useEffect(()=>{
        fetchCases();
    },[])

    if (isLoading) {
        return (
            <p>...loading</p>
        )
    };

    return (
        <section className="case-card-container">
        {cases.map((fetchedCase) => {
            return <CaseCard key={fetchedCase.case_id} fetchedCase={fetchedCase}/>
        })}
        </section>
    )
}

export default CasesGrid; 