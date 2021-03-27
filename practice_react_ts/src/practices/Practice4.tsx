export const Practice4 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  }
  const onClickPractice = () => {
    let total: number = 0;
    total = getTotalFee(1000);
    console.log(total);
  }
  return (
    <div>
      <p>練習問題:引数の型指定</p>
      <button onClick={onClickPractice}>練習問題4を実行</button>
    </div>
  )
}
