import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech, onDelete }) {
    return (
        <li  key={tech}>
            {tech}
            <button onClick={onDelete} type="button">Remover</button>
        </li>
    );
};

TechItem.PropTypes = {
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired 
}

// Definindo valor padrão de funções
// TechItem.defaultProps = {
//     tech: 'oculto',
// };

export default TechItem;