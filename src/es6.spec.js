const assert = require('assert');
const core = require('./es6');

describe('es6', () => {
    describe('#fioToName', () => {
        it('ФИО в Имя Фамилия корректно', () => {
            assert.strictEqual(core.fioToName('Иванов Иван Иванович'), 'Иван Иванов');
        });

        it('ФИ в Имя Фамилия', () => {
            assert.strictEqual(core.fioToName('Петров Петр'), 'Петр Петров');
        });
    });

    describe('#filterUnique', () => {
        it('массив с уникальными равен сам себе', () => {
            assert.deepStrictEqual(core.filterUnique([1, 2, 3]), [1, 2, 3]);
        });

        it('массив с неуникальными отфильтрован', () => {
            assert.deepStrictEqual(core.filterUnique([1, 1, 1, 1]), [1]);
        });

        it('пустой массив', () => {
            assert.deepStrictEqual(core.filterUnique([]), []);
        });
    });

    describe('#calculateSalaryDifference', () => {
        it('считает разницу корректно', () => {
            assert.strictEqual(core.calculateSalaryDifference([1, 2, 3]), 3);
        });

        it('на пустой массив возвращается falsy значение', () => {
            assert.strictEqual(!!core.calculateSalaryDifference([]), false);
        });
    });

    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const dic = new core.Dictionary();
            assert.strictEqual(!!dic, true);
        });

        it('проверка плохих данных', () => {
            const dic = new core.Dictionary();
            assert.strictEqual(dic.setValue("bus", undefined), undefined);
            assert.strictEqual(dic.setValue("car", null), undefined);
            assert.strictEqual(dic.setValue(undefined, "train"), undefined);
            assert.strictEqual(dic.setValue(null, "plane"), undefined);
            assert.strictEqual(dic.setValue(undefined, undefined), undefined);
            assert.strictEqual(dic.setValue(null, null), undefined);
        });

        it('хорошие данные', () => {
            const dic = new core.Dictionary();
            dic.setValue("bmw", "3");
            dic.setValue("audi", "5");
            dic.setValue("land rover", "10");
            assert.strictEqual(dic.getValue("audi"), "5");
            assert.strictEqual(dic.getValue("amg"), undefined);
            assert.strictEqual(dic.getValue("bmw"), "3");
            assert.strictEqual(dic.getValue("land rover"), "10");
        });
    });
});