export const output1 = ()=>{
    // 同期処理が非同期処理より先に呼ばれることを確認
    setTimeout(()=>console.log('async toplevel'),0);
    console.log('sync toplevel');

    if (true) {
        // ネストされた同期処理もが非同期処理より先に呼ばれる
        console.log('sync nest')
    }
}