import React from 'react';
import { useGitHubAutomatedRepos, StackIcons } from 'github-automated-repos';
import './projects.css';
//import { GitHubRepos } from 'github-automated-repos';


const Projeto = () => {
    const { data, isLoading, error } = useGitHubAutomatedRepos("wellissonlima", "repos");
    console.log("Repositórios com a tag 'react':", data);

    if (isLoading) return <div className='loading'> loading...</div>
    if (error) return <div className='error'>Erro ao carregar repositórios</div>;
    if (!data || data.length === 0) return <div className='empty'>Nenhum repositório encontrado</div>;

    return (
        <section className='projetos'>
            <h2 className='titulo'>Meus Projetos</h2>

            <ul className='github-repos-container'>
                {data.map((item, index) => (
                    <li key={index} className='github-repo-card'>
                        {item.banner ? (<img className='banner' src={item.banner} alt={item.name} />) : (<div className='no-image'>Sem imagem disponível</div>)}

                        <h3 className='projeto-name'>{item.name}</h3>

                        <p className='projeto-descricao'>{item.description.slice(0, 170)} [...]</p>

                        <div className='projeto-links'>
                            <a href={item.homepage} target='_blank' rel='noreferrer' className='projeto-link'>
                                <h3>🌐 Site</h3>
                            </a>
                            <a href={item.html_url} target='_blank' rel='noreferrer' className='projeto-link'>🔗 Código</a>
                        </div>

                        <div className='projeto-icons'>
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
        </section>
    )
}

export default Projeto;