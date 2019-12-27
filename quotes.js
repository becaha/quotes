let quoteVue = new Vue({
    el: '#quoteVue',
    data: {
        quotes: [
                {quote: 'We must choose between what is easy and what is right', author: 'Albus Dumbledore'},
                {quote: 'Happiness can be found, even in the darkest of times, if one only remembers to turn on the light', author: 'Albus Dumbledore'},
                {quote: 'Sometimes, the smallest things take up the most room in your heart', author: 'Winnie The Pooh'},
                {quote: 'If I know what love is, it is because of you', author: 'Herman Hesse'},
                {quote: 'You know you’re in love when you don’t want to fall asleep because reality is finally better than your dreams', author: 'Dr. Seuss'}
            ],
        numRows: 3
    },
    computed: {
        quotesPerRow: function() {
            var numQuotes = this.quotes.length/this.numRows;
            return numQuotes;
        },
        extraQuotes: function() {
            var numExtras = this.quotes.length - Math.floor(this.quotesPerRow)*this.numRows;
            return numExtras;
        }
    },
    methods: {
        rowQuotes: function(row) {
            var extrasUsed = 0;
            var extraQuote = 0;
            // add to middle row
            if(this.extraQuotes == 1 && row == 1) {
                extraQuote = 1;
            }
            if(this.extraQuotes == 1 && row == 2) {
                extrasUsed = 1;
            }
            // add to first/last rows
            if (this.extraQuotes == 2 && (row == 0 || row == 2)) {
                extraQuote = 1;
            }
            if (this.extraQuotes == 2 && (row == 1 || row == 2)) {
                extrasUsed = 1;
            }
            var quotesPerRow = Math.floor(this.quotesPerRow)
            var startIndex = quotesPerRow*row + extrasUsed;
            var endIndex = startIndex + quotesPerRow + extraQuote;
            var rowQuotes = this.quotes.slice(startIndex, endIndex);
            return rowQuotes;
        }
    }
});
