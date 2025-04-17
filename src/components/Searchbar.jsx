import React, {useState, useEffect} from 'react';
import Fuse from 'https://cdn.jsdelivr.net/npm/fuse.js@7.1.0/dist/fuse.mjs';



function Searchbar(props) {

    const [searchTerm, setSearchTerm] = useState('');


    const data = [
        { name: 'How long does it take to get accepted into the groups? -> You should be accepted within 24-48 hours.', tags: ['time', 'group-acceptance', "ga", "group"] },
        { name: 'Where can I find the links to the groups? -> In the group tab right here on this page.', tags: ["group", "link"] },
        { name: 'How long does it take until my admin eval is graded? -> Your admin eval should be graded around 24-48 hours after submitting.', tags: ['time', 'admin-eval' , 'ae'] },
        
    ];
      
    const options = {
        keys: ['tags'],
        threshold: 0.4, // Wie tolerant die Suche sein soll (0 = exakt, 1 = sehr fuzzy)
        includeMatches: true,
        shouldSort: true,
    };

    const fuse = new Fuse(data, options);

    const SearchOnClick = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        let result = fuse.search(searchTerm);
        
        result = result.map(result => result.item.name);
        result = JSON.stringify(result).replaceAll('"', '').replaceAll('[', '').replaceAll(']', '').split(',');
        
        let resultString = '';
        for (let i = 0; i < result.length; i++) {
            if (result[i] == undefined || result[i] == null || result[i] == '') {
                continue;
                
            } else {
                resultString += result[i] + '\n';
            }
        }
        
        window.alert(resultString);
    }

    useEffect(() => {
        
    }, [searchTerm]); // Call update function whenever date or type changes

  return (   
    <> 
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm}  onChange={(e) => setSearchTerm(e.target.value)}></input>
            <button class="btn btn-outline-success" type="submit" onClick={(e) => SearchOnClick(e)}>Search</button>
        </form>
        

    </>  
  );
}

export default Searchbar;