let array_quiz = [
    {
      question: '配列の各要素に対して関数を実行したい場合に使用するのは次のうちどれ？',
      before: '配列: ["村","道", "山", "森"]',
      result: '出力結果(関数に(element => console.log(element + "本")の引数を渡した場合): 村本、道本、山本、森本 ※配列ではないので注意',
      answers: ['forEach()'],
      correct: 'forEach()'
    },{
      question: '配列の末尾に["海"]という要素を追加したい際に使用するのは次のうちどれ？',
      before: '配列: ["村","道", "山", "森"]',
      result: '出力結果: ["道", "山", "森", "海"]',
      answers: ['push()'],
      correct: 'push()'
    },{
      question: '配列の末尾の要素を削除する際に使用するのは次のうちどれ？',
      before: '配列: ["村","道", "山", "森"]',
      result: '出力結果: ["村", "道", "山"]',
      answers: ['pop()'],
      correct: 'pop()'
    },{
      question: '配列の先頭の要素を削除する際に使用するのは次のうちどれ？',
      before: '配列: ["村","道", "山", "森"]',
      result: '出力結果: ["道", "山", "森"]',
      answers: ['shift()'],
      correct: 'shift()'
    },{
      question: '配列の先頭に["海"]という要素を追加したい際に使用するのは次のうちどれ？',
      before: '配列: ["村","道", "山", "森"]',
      result: '出力結果: ["海", "村", "道", "山", "森"]',
      answers: ['unshift()'],
      correct: 'unshift()'
    },{
      question: '配列の特定要素の添字を取得したい際に使用するのは次のうちどれ？',
      before: '配列: ["村","道", "山", "森"]',
      result: '出力結果("道"の添字の場合): 1',
      answers: ['indexOf()'],
      correct: 'indexOf()'
    },{
      question: '配列の特定位置の要素の削除や追加(複数可)をしたい際に使用するのは次のうちどれ？',
      before: '配列: ["村","道", "山", "森"]',
      result: '出力結果(真ん中２つの要素を削除): ["村", "森"],出力結果(特定位置の要素追加): ["村", "道", "海", "山", "森"]',
      answers: ['splice()'],
      correct: 'splice()'
    },{
      question: '配列の特定位置の要素(複数可)を取り出したい際に使用するのは次のうちどれ？',
      before: '配列: ["村","道", "山", "森"]',
      result: '出力結果: ["道", "山"]',
      answers: ['slice()'],
      correct: 'slice()'
    },{
      question: '文字列"村道山森"を一文字ずつ配列にしたい場合に使用する静的メソッドは次のうちどれ？',
      before: '',
      result: '出力結果(引数に("村道山森")を入れた場合): ["村","道", "山", "森"]',
      answers: ['from()'],
      correct: 'from()'
    },{
      question: '渡された値(引数)が配列がどうか判断したい際に使用する静的メソッドは次のうちどれ？',
      before: '配列: ary = ["村","道", "山", "森"], 文字列: string = "村道山森"　',
      result: '出力結果(引数に(ary)を入れた場合): true , 出力結果(引数に(string)を入れた場合): false',
      answers: ['isArray()'],
      correct: 'isArray()'
    },{
      question: '配列の各要素に対して関数を実行し、単一の出力値を生成したい際に使用するのは次のうちどれ？',
      before: '配列: ["村","道", "山", "森"]',
      result: '出力結果(関数: function = (accumulator, currentValue) => accumulator + currentValue;を引数にして実行した場合): 村道山森',
      answers: ['reduce()'],
      correct: 'reduce()'
    },{
      question: '複数の配列を結合したい際に使用するのは次のうちどれ？',
      before: '配列: ["村","道"], ["山", "森"]',
      result: '出力結果(関数: ["村","道", "山", "森"]',
      answers: ['concat()'],
      correct: 'concat()'
    },{
      question: '配列を右から左へ関数を適用したい際に使用するのは次のうちどれ？',
      before: '配列: ["村","道", "山", "森"]',
      result: '出力結果(関数: function = (accumulator, currentValue) => accumulator + currentValue;を引数にして実行した場合): 森山道村',
      answers: ['reduceRight()'],
      correct: 'reduceRight()'
    },{
      question: '配列を右から左へ関数を適用したい際に使用するのは次のうちどれ？',
      before: '配列: ["村", "道", "山", "森"]',
      result: '出力結果: ["森", "山", "道", "村"]',
      answers: ['reverce()'],
      correct: 'reverce()'
    },{
      question: '配列の少なくとも一つの要素が指定された関数をクリアしているかどうか確認したい際に使用するのは次のうちどれ？',
      before: '配列: [1, 2, 3, 4, 5]',
      result: '出力結果(関数: value => value > 3の場合): true, 出力結果(関数: value => value > 6の場合): false',
      answers: ['some()'],
      correct: 'some()'
    },{
      question: '配列の全ての要素が指定された関数をクリアしているかどうか確認したい際に使用するのは次のうちどれ？',
      before: '配列: [1, 2, 3, 4, 5]',
      result: '出力結果(関数: value => value > 3の場合): false, 出力結果(関数: value => value < 6の場合): true',
      answers: ['every()'],
      correct: 'every()'
    },{
      question: '配列の要素を指定された順に昇順で並べ替えたい際に使用するのは次のうちどれ？',
      before: '配列: ["村", "道", "山", "森"]',
      result: '出力結果(今回は既定の条件で並べ替えてます): ["山", "村", "森", "道"]',
      answers: ['sort()'],
      correct: 'sort()'
    },{
      question: '配列のサイズを変更せずに配列の一部の要素を配列の別の場所にコピーしたい際に使用するのは次のうちどれ？',
      before: '配列: ["村", "道", "山", "森"]',
      result: '出力結果(引数に(0, 2)入れた場合): ["山", "森", "山", "森"]',
      answers: ['copyWithin()'],
      correct: 'copyWithin()'
    },{
      question: '配列の要素(複数可)を指定した値に変更したい際に使用するのは次のうちどれ？',
      before: '配列: ["村", "道", "山", "森"]',
      result: '出力結果(引数に("海", 1, 3)入れた場合): ["山", "海", "海", "森"]',
      answers: ['fill()'],
      correct: 'fill()'
    },{
      question: '指定された関数をクリアした要素のみからなる配列を作成したい際に使用するのは次のうちどれ？',
      before: '配列: [1, 2, 3, 4, 5]',
      result: '出力結果(引数に関数: value => value > 3を入れた場合): [4, 5]',
      answers: ['filter()'],
      correct: 'filter()'
    },{
      question: '指定された関数をクリアする最初の要素を取得したい際に使用するのは次のうちどれ？',
      before: '配列: [1, 2, 3, 4, 5]',
      result: '出力結果(引数に関数: value => value > 3を入れた場合): 4',
      answers: ['find()'],
      correct: 'find()'
    },{
      question: '指定された関数をクリアする最初の要素の添字(位置)を取得したい際に使用するのは次のうちどれ？',
      before: '配列: [1, 2, 3, 4, 5]',
      result: '出力結果(引数に関数: value => value > 3を入れた場合): 3',
      answers: ['findIndex()'],
      correct: 'findIndex()'
    },{
      question: 'サブ配列を指定した深さで結合したい際に使用するのは次のうちどれ？',
      before: '配列: [1, 2, 3, [4, 5]]',
      result: '出力結果: [1, 2, 3, 4, 5]',
      answers: ['flat()'],
      correct: 'flat()'
    },{
      question: '配列の各要素に対して関数を実行し、新しい配列を生成したい際に使用するのは次のうちどれ？',
      before: '配列: ["村", "道", "山", "森"]',
      result: '出力結果(引数に関数: element => element + "本"を入れた場合): ["村本", "道本", "山本", "森本"]',
      answers: ['map()'],
      correct: 'map()'
    },{
      question: '指定した要素が配列に含まれているか確認したい際に使用するのは次のうちどれ？',
      before: '配列: ["村", "道", "山", "森"]',
      result: '出力結果(引数に("村")を入れた場合): true, 出力結果(引数に("海")を入れた場合): false',
      answers: ['includes()'],
      correct: 'includes()'
    },{
      question: '配列の全要素を順に連結した文字列を生成したい際に使用するのは次のうちどれ？',
      before: '配列: ["村", "道", "山", "森"]',
      result: '出力結果(引数に("")を入れた場合): 村道山森',
      answers: ['join()'],
      correct: 'join()'
    },{
      question: '指定した要素と合致する要素の内、最後の要素の添字(位置)を取得したい際に使用するのは次のうちどれ？',
      before: '配列: ["村", "道", "山", "山"]',
      result: '出力結果(引数に("山")を入れた場合): 3',
      answers: ['lastIndexOf()'],
      correct: 'lastIndexOf()'
    }
  ];