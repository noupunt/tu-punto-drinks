
import { useLocation } from 'react-router-dom';
import { useFetchJSON } from './hooks/useFetchJSON';

export interface Props {
    url: string;
}

// App.js
export const App: React.FC<Props> = ({ url }) => {


    let location = useLocation();
    const data = useFetchJSON(url);


    return (
        <>
            {data.status === 'loading' && <div>Loading...</div>}

            {data.status === 'loaded' && (

                <>
                    <div>
                        < img src={
                            data.payload.find(x => x.id === location.pathname.substring(1))?.img
                        }>
                        </img>

                        {/* <div>{
                            data.payload.find(x => x.id === location.pathname.substring(1))?.title
                        }
                        </div> */}
                    </div>
                </>


            )

            }

        </>
    )
}
