import React from 'react';
import styles from './childComponent.module.css';

interface ChildComponentProps {
    title: string;
    title1: string;
    description: string;
}

const childComponent: React.FC<ChildComponentProps> = ({ title, description, title1 }) => {
    return (
        <div className={styles.child}>
            <h2>{title}</h2>

            <h3>{title1}</h3>

            <p>{description}</p>
        </div>
    );
};

export default childComponent;