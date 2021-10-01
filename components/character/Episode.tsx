import { Episode as IEpisode } from "../../pages/character/[id]"


export const Episode = ({ episode, name }: IEpisode) => {

    return (
        <div>
            <h4>Episode: {episode}</h4>
            <h4>Name: {name}</h4>
        </div>
    )

}

