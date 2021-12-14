const TenichiToken = artifacts.require("./TenichiToken.sol");

contract("TenichiToken", accounts => {
    it("...should put 1000T1 in the first account.", async () => {
        //コントラクトのインスタンスを取得
        const tokenInstance = await TenichiToken.deployed();

        //account[0]のトークンの残高を取得
        let balance = await tokenInstance.balanceOf(accounts[0]);

        //桁数が大きいのでether単位(10^18)に変換
        balance = web3.utils.fromWei(balance, "ether");

        //残高数と数字100を比較
        assert.equal(balance, 1000, "First account don't have 10000 T1.");
    });
});
