import React from 'react';
import '../styles/components/Article.css';


interface ArticleProps {
    imagePath: string;
    title: string;
    buttonText?: string;
}

const Article: React.FC<ArticleProps> = ({ imagePath, title, buttonText = "Click Me" }) =>  {
    return (
    <div className="article-container">
        <div className="article-image" style={{backgroundImage: `url(${imagePath})`}}></div>
        <h2 className="article-title">{title}</h2>
        <button className="article-button">{buttonText}</button>
    </div>
    );
};

export default Article;