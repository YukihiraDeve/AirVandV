import React, { useEffect, useState } from 'react';
//import { checkIfUserOwnsToken } from '../BlockchainOutils';
import './Article.css';

interface ArticleProps {
    imagePath: string;
    title: string;
    userAddress: string;  // Assurez-vous de transmettre cet attribut lorsque vous utilisez le composant Article
    tokenId: number;      // Assurez-vous de transmettre cet attribut également
}

const Article: React.FC<ArticleProps> = ({ imagePath, title }) => {
    const [userOwnsToken, setUserOwnsToken] = useState<boolean | null>(null);
/*
    useEffect(() => {
        (async () => {
            const owns = await checkIfUserOwnsToken(userAddress, tokenId);
            setUserOwnsToken(owns);
        })();
    }, [userAddress, tokenId]);

    // Si userOwnsToken est null (en attente de la réponse de l'API ou autre raison), 
    // vous pourriez vouloir afficher un indicateur de chargement à la place de rien.
    if (userOwnsToken === null) return <div className="article-container-loading">Loading...</div>;

    const buttonText = userOwnsToken ? "Ouvrir la porte" : "Réserver";
*/
    return (
        <div className="article-container">
            <div className="article-image" style={{ backgroundImage: `url(${imagePath})` }}></div>
            <h2 className="article-title">{title}</h2>
        {/* <button className="article-button">{buttonText}</button> */}
        </div>
    );
};

export default Article;
