import styles from './home.module.css';
import { Link, useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

export interface CoinProps {

    id: string;
    name: string;
    symbol: string;
    marketCap: number;
    priceUsd: number;
    volume: number;
    vwap24h: number;
    changePercent24Hr: string;
    rank: string;
    supply: string;
    maxSupply: string;
    marketCapUsd: string;
    explorer: string;
    volumeUsd24Hr: string;
    formatedPrice?: string;
    formatedMarket?: string;
    formatedVolume?: string;
}

interface DataPro {
    data: CoinProps[]; 
    }

export function Home (){

    const [input, setInput] = useState('');
    const [coins, setCoins] = useState<CoinProps[]>([]);
    const [offset, setOffset] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        
        getData();


    }, [offset]);

    async function getData() {
        // Aqui você pode fazer uma chamada para a API para buscar os dados das criptomoedas
        // e atualizar o estado com os dados recebidos.
        // Exemplo:
        // const response = await fetch('https://api.example.com/cryptocurrencies');
        // const data = await response.json();
        // setCryptocurrencies(data);

        fetch(`https://rest.coincap.io/v3/assets?limit=10&offset=${offset}&apiKey=ba36aad65773f4f1389a3bb96acc56341873edce3b9e13da663e83897172a425`)
        .then(response => response.json())
        .then((data: DataPro) => {
           
            const coinsData = data.data;

            const price = Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            })

            const priceCompact = Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                notation: 'compact',
            })


            const formatedResult = coinsData.map((item) => {
                const formated = {
                    ...item,
                    formatedPrice: price.format(Number(item.priceUsd)),
                    formatedMarket: priceCompact.format(Number(item.marketCapUsd)),
                    formatedVolume: priceCompact.format(Number(item.volumeUsd24Hr)),
                }

                return formated;
            })

            const listcoin = [...coins, ...formatedResult];
            setCoins(listcoin);
            console.log(formatedResult);
        })
         
    }

    async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  if(input.trim() === '') return;

  try {
    const response = await fetch(`https://rest.coincap.io/v3/assets?search=${input.trim()}&apiKey=ba36aad65773f4f1389a3bb96acc56341873edce3b9e13da663e83897172a425`);
    const data = await response.json();

    if(data.data && data.data.length > 0) {
      // Navega usando o ID da primeira moeda encontrada
      navigate(`/detail/${data.data[0].id}`);
    } else {
      alert("Nenhuma criptomoeda encontrada!");
    }
  } catch (error) {
    console.error("Search error:", error);
    navigate("/");
  }
}

    function handleGetMore() {
        if(offset){
            setOffset(10);
            return;
        }
        setOffset(offset + 10);
    }

    return(

        <main className={styles.container}>
            

            <table>
                <thead>
                    <tr>
                        <th scope='col'>Moeda </th>
                        <th scope='col'>Valor de mercado </th>
                        <th scope='col' >Preço </th>
                        <th scope='col' >Volume </th>
                        <th scope='col' >Mudança 24h </th>
                    </tr>
                </thead>

                <tbody id="tbody">
                   
                   {coins.length > 0 && coins.map((item) => (

                     <tr className={styles.tr} key={item.id}>

                        <td className={styles.td} data-label="Moeda">
                            <div className={styles.name}>

                                <img 
                                className= {styles.logo}
                                src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`} alt={item.name} />
                                <Link to={`/detail/${item.id}`}> 
                                    <span>{item.name}</span> | {item.symbol}
                                </Link>
                            </div>
                        </td>
                        <td className={styles.td} data-label="Valor de mercado">

                            {item.formatedMarket}

                        </td>
                        <td className={styles.td} data-label="Preço">
                            {item.formatedPrice}

                        </td>
                        
                        <td className={styles.td} data-label="Volume">
                            {item.formatedVolume}
                        </td>

                        <td className={Number(item.changePercent24Hr) > 0 ? styles.tdProfit : styles.tdLoss} data-label="Mudança 24h">
                            <span> {Number(item.changePercent24Hr).toFixed(3)}  </span>
                        </td>
                    </tr>
                   ))}

                </tbody>
                  

            </table>

            <button className={styles.buttonMore} onClick={handleGetMore}>
                Ver mais
            </button>

        </main>
    )
}