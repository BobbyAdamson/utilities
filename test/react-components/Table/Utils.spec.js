import * as TableUtils from '../../../react-components/Table/Utils';

describe('#Utils - Tables', () => {
    describe('#generateTableHeaderRow()', () => {
        const
            fakeSchema = ['col1', 'col2', 'col3'],
            fakeTableHeader = TableUtils.generateTableHeaderRow(fakeSchema);

        test('Returns a table row', () => {
            expect(fakeTableHeader.type).toBe('tr');
        });

        test('Row children are table headers', () => {
            expect(fakeTableHeader.props.children.map(child => child.type === 'th').length).toBe(fakeSchema.length);
        });

        test('All schema headers render table headers', () => {
            expect(fakeTableHeader.props.children.length).toBe(fakeSchema.length);
        });
    });
});