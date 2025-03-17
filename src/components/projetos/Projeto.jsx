import React from 'react';
import { useGitHubAutomatedRepos, StackIcons } from 'github-automated-repos';
//import { GitHubRepos } from 'github-automated-repos';


const Projeto = () => {
    const { data, isLoading } = useGitHubAutomatedRepos("WellissonLima", "deploy");
    console.log(data)

    if (isLoading) {
        return <div> loading...</div>
    }

    return (
        <ul>
            {data.map((item, index) => {
                <div key={index}>
                    <li>
                        {item.banner ? (<img className='banner' src={item.banner} alt={item.name} />) : (<div></div>)}

                        <h1>{item.name}</h1>

                        <p>{item.description.slice(0, 170)} [...]</p>

                        <div>
                            <a href={item.homepage} target='_blank' rel='noreferrer'>
                                <h3>🌐 Site</h3>
                            </a>
                            <a href={item.html_url } target='_blank' rel='noreferrer'>🔗 Código</a>
                        </div>

                        <div>
                            {item.topics.map((icon, index) => {
                                <StackIcons 
                                    key={index}
                                    itemTopics={icon}
                                />
                            })}
                        </div>
                    </li>
                </div>
            })}
        </ul>
    )
}

export default Projeto;