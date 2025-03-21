import React from 'react';
import { useGitHubAutomatedRepos, StackIcons } from 'github-automated-repos';
import './projects.css';
//import { GitHubRepos } from 'github-automated-repos';


const Projeto = () => {
    const { data, isLoading, error } = useGitHubAutomatedRepos("wellissonlima", "repos");
    console.log("Repositórios com a tag 'react':", data);

    if (isLoading) return <div> loading...</div>
    if (error) return <div>Erro ao carregar repositórios</div>;
    if (!data || data.length === 0) return <div>Nenhum repositório encontrado</div>;

    return (
        <div>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        {item.banner ? (<img className='banner' src={item.banner} alt={item.name} />) : (<div>Sem imagem disponível</div>)}

                        <h2>{item.name}</h2>

                        <p>{item.description.slice(0, 170)} [...]</p>

                        <div>
                            <a href={item.homepage} target='_blank' rel='noreferrer'>
                                <h3>🌐 Site</h3>
                            </a>
                            <a href={item.html_url} target='_blank' rel='noreferrer'>🔗 Código</a>
                        </div>

                        <div>
                            {item.topics.map((icon, index) => (
                                <StackIcons
                                    key={index}
                                    itemTopics={icon}
                                />
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Projeto;