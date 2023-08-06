import './App.css';
import { output1, output2,output3, output4 } from './outputs/index';

function App() {

  return (
    <div>
      <div className='Title'>Promiseの本 実装練習</div>
      <div className='Description'>
        <a href='https://azu.github.io/promises-book/#chapter3-promise-testing'>Promiseの本</a>
        に関連する、ログにより動作確認をするコード
      </div>
      <div className='Outputs'>
        <div className='Clear'>
          <button onClick={console.clear}>Clear Console</button> 
        </div>
        <ol>
          <li>
            同期処理が非同期処理より先に呼ばれる
            <button onClick={output1}>Call</button>
          </li>
          <li>
            then,catchによるエラーハンドリングとタイムアウト
            <button onClick={()=>output2('https://httpbin.org/get')}>Call Success</button>
            <button onClick={()=>output2('https://httpbin.org/status/500')}>Call Error</button>
          </li>
          <li>
            catch.thenで正常系に戻る
            <button onClick={output3}>Call</button>
          </li>
          <li>
            promise.allの利用（何か足りなかったらエラー吐くようにする）
            <button onClick={()=>output4(['https://httpbin.org/get','https://httpbin.org/get','https://httpbin.org/get'])}>
              Call Success
            </button>
            <button onClick={()=>output4(['https://httpbin.org/status/500','https://httpbin.org/get','https://httpbin.org/get'])}>
              Call Error
            </button>
          </li>
          <li>
            Promiseによるfsのメソッドチェーンをclassにリファクタ
          </li>
          <li>
            async functionの例外の自動キャッチと、呼び出し元関数でのtry-catchによるエラーハンドリング
          </li>
          <li>
            await で停止する処理のスコープ（トップレベル）の確認
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
