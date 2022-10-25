import { RepositoryItem } from "./RepositoryItem"
import "../styles/repositories.scss"
import { useEffect, useState } from "react"

export function RepositoryList(){
    const [repos, setRepos] = useState([])

    useEffect(()=>{
        fetch("https://api.github.com/orgs/rocketseat/repos")
            .then(res=>res.json())
            .then(data=>setRepos(data))
    }, [])

    return(
        <section className="repository-list">
            <h1>Lista de Repositorios</h1>

            <ul>
                {repos.map(repos=>
                    <RepositoryItem
                        key={repos.id}
                        repos={repos}
                    />
                )}
            </ul>
        </section>
    )
}