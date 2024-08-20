import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DogBreeds = () => {
    const [breeds, setBreeds] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBreeds = async () => {
            try {
                const response = await axios.get('https://dogbreeds.p.rapidapi.com/', {
                    headers: {
                        'x-rapidapi-host': 'dogbreeds.p.rapidapi.com',
                        'x-rapidapi-key': '581c91dd83mshcb340a67f03daefp17a6c8jsn1397697011ae'
                    }
                });
                setBreeds(response.data);
            } catch (error) {
                console.error('Error fetching dog breeds:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchBreeds();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>Dog Breeds</h1>
            <ul>
                {breeds.map(breed => (
                    <li key={breed.id}>{breed.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default DogBreeds;