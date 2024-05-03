import If from "@/components/If";
import OnlyPair from "@/components/OnlyPair";

export default function condictional(){

    const number = 10;

    return (<>
        <div>
            <OnlyPair number={1}></OnlyPair>
            <OnlyPair number={2}></OnlyPair>
            <OnlyPair number={3}></OnlyPair>
            <OnlyPair number={4}></OnlyPair>
            <OnlyPair number={5}></OnlyPair>
            <OnlyPair number={6}></OnlyPair>

            <If test={number %2 ==0}>
                 <h1>O numero {number} eh par</h1>
            </If>
        </div>
    </>)
}