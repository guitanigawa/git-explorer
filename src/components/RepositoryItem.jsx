export function RepositoryItem(props){
    return(
        <li>
            <strong>{props.repos.name}</strong>
            <p>{props.repos.description}</p>
            
            <a href={props.repos.html_url}>
                Acessar Repositorio
            </a>
        </li>
    )
}