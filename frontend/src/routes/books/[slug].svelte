<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`books/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { book: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>

  import Icon from 'fa-svelte';
  import {faTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter'

  import {stores} from '@sapper/app';

  import { fade } from 'svelte/transition';

  const {page} = stores();

	export let book;

  let icon = faTwitter;

  $: path = encodeURI(page.path)

  let tweetURL = encodeURI(`https://twitter.com/intent/tweet?url=https://jeff.to${$page.path}&text=Check out @jeffjose's review of ${book.title}`)
</script>

<style lang="scss">


@charset "UTF-8";
.bookitem {
  background-color: white;
  margin-top: 1rem;
}

.wrapper {
  display: grid;
  grid-template-columns: 5fr [content-start] 2fr [word-start] 720px [word-end] 2fr [content-end] 5fr;
  color: rgba(0, 0, 0, 0.84);
}

@media (max-width: 800px) {
  .wrapper {
    grid-template-columns: 20px [content-start] 2fr [word-start] auto [word-end] 2fr [content-end] 20px;
  }

  .wrapper :global(.quoteblock blockquote) {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }

  // Setting this back to 1.5rem (and shouldnt be affected by above)
  .wrapper :global(.subtitle p) {
    font-size: 1.5rem !important;
  }

  .wrapper :global(p), .wrapper :global(li), .wrapper :global(.listingblock .content), .wrapper :global(dl dt),  .wrapper :global(.admonitionblock) , .wrapper :global(.fa-square-o:before), .wrapper :global(.fa-check-square-o:before) {
     font-size: 1.1rem !important;
  }
}

  .wrapper .endofbook {
    text-align: center;
  }

  .wrapper .toolbar {
    height: 3rem;
  }

  .toolbar .link {
    font-size: 1rem;
  }

  .link a {
      background-color: white;
      padding: 4px 8px;
      border-radius: 5px;
      border: 1px solid #FF0088;
  }

  .link a:hover {
        background-color: #FF0088;
        text-decoration: none;
        color: white;
  }

.wrapper :global(*) {
  grid-column: word;
}

.wrapper :global(h1) {
  font-size: 2.9rem;
  font-weight: 500;
  letter-spacing: -2px;
  line-height: 3.5rem;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
}

.wrapper :global(h2) {
  font-size: 2.3rem;
  font-weight: 500;
  letter-spacing: -1px;
  margin: 2rem 0 0 0;
}

.wrapper :global(h3) {
  font-size: 2.0rem;
  font-weight: 500;
  letter-spacing: -1px;
  margin: 1.5rem 0 0 0;
}

.wrapper :global(h4) {
  font-size: 1.9rem;
  font-weight: 500;
  letter-spacing: -1px;
  margin: 2rem 0 0 0;
}

.wrapper :global(h5) {
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -1px;
  margin: 2rem 0 0 0;
}

.wrapper :global(img) {
  width: 100%;
}

.wrapper :global(p) {
  font-size: 1.25rem;
  margin-top: 0.9rem;
  margin-bottom: 0.9rem;
}

.wrapper :global(p em) {
  font-size: 1.25rem;
}

.wrapper :global(p em code) {
  font-style: normal;
  font-family: "Fira Mono", monospace;
}

.wrapper :global(.fullbleed) {
  grid-column: 1 / -1;
  border: none !important;
}

.wrapper :global(.imageblock .title) {
  text-align: center;
  font-size: 1.1rem;
  margin: 1rem 0;
}

.wrapper :global(.big) {
  grid-column: content;
}

.wrapper :global(.imageblock.hero .content) {
  display: grid;
}

.wrapper :global(.imageblock.hero .content img) {
  width: auto;
  }

.wrapper :global(li) {
  font-size: 1.25rem;
}

.wrapper :global(p code) {
  background-color: #eff8ff;
  padding: 3px 4px;
  font-size: 1rem;
  font-family: "Fira Mono", monospace;
}

.wrapper :global(.listingblock) {
  padding: 0 1rem;
  background-color: #f4faff;
  margin: 0.5em 0;
  border: 1px solid #c1e3ff;
  border-radius: 3px;
}

.wrapper :global(.listingblock .content) {
  padding: 0rem 0.8rem 0.5rem 0;
  line-height: 1.9rem;
  font-size: 1.25rem;
}

.wrapper :global(.listingblock .title) {
  color: #5bb7ff;
  margin-top: .5rem;
  pointer-events: none;
  user-select: none
}

.wrapper :global(.listingblock code) {
  white-space: pre-wrap;
}

  .tweet {
    margin: 3rem 0 !important;
  }

  .tweet a {
    color: rgba(0, 0, 0, 0.84) !important;
  }

  .tweet a:hover {
    color: #FF0088 !important;
  }

  .tweet :global(.icon) {
    vertical-align: middle;
    transition: none; // svg transitions are slow
  }

  .tweet :global(.icon svg) {
    padding-top: 5px;
    padding-right: 9px;
    transition: none; // svg transitions are slow
  }

  .tweet :global(.icon svg *) {
    transition: none; // svg transitions are slow
  }

.wrapper :global(a) {
  color: #FF0088;
  text-decoration: none;
}

.wrapper :global(.contents a:hover) {
  text-decoration: underline;
}

.wrapper :global(.checklist) {
  list-style-type: none;
}

.wrapper :global(.checklist ul) {
  padding: 0;
}

.wrapper :global(dl dt) {
  font-size: 1.25rem;
  font-weight: 700;
}

.wrapper :global(dl dd p) {
  margin-top: 0.5rem;
}

.wrapper :global(.quoteblock) {
  font-size: 1.7rem;
  color: rgba(26, 26, 26, 0.84);
}

.wrapper :global(.quoteblock blockquote) {
  text-align: center;
}

.wrapper :global(.quoteblock .attribution) {
  text-align: right;
  margin-top: -1rem;
  margin-bottom: 1rem;
}

.wrapper :global(.quoteblock .attribution a) {
  color: rgba(26, 26, 26, 0.84);
}

.wrapper :global(.quoteblock .attribution br) {
  display: block;
  margin: -0.5rem 0;
  content: "";
}

.wrapper :global(.quoteblock .attribution cite) {
  font-size: 1.1rem;
  line-height: 0;
}

.wrapper :global(.videoblock) {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  border: 0.5rem solid #e6007a;
  margin: 1rem 0;
  box-sizing: border-box;
}

.wrapper :global(.videoblock iframe) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.wrapper :global(.subtitle) {
  color: rgba(59, 59, 59, 0.84);
}

.wrapper :global(.subtitle p) {
  margin-top: 0rem;
  font-size: 1.5rem;
  line-height: 2rem;
}

.wrapper :global(.date) {
  color: rgba(59, 59, 59, 0.84);
  margin-top: 0rem;
}

.wrapper :global(.date p) {
  margin-top: 0rem;
  font-size: 1rem;
}

.wrapper :global(kbd) {
  font-family: "Fira Mono", monospace;
  display: inline-block;
  color: rgba(0, 0, 0, 0.84);
  font-size: .65em;
  line-height: 1.45;
  background: #f7f7f7;
  border: 1px solid #ccc;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 0 0.1em white inset;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 0 0.1em #fff inset;
  margin: 0 .15em;
  padding: .2em .5em;
  vertical-align: middle;
  position: relative;
  top: -.1em;
  white-space: nowrap;
}

.wrapper :global(.keyseq kbd:first-child) {
  margin-left: 0;
}

.wrapper :global(.keyseq kbd:last-child) {
  margin-right: 0;
}

.wrapper :global(.menuseq), .wrapper :global(.menuref) {
  color: #000;
}

.wrapper :global(.menuseq b:not(.caret)), .wrapper :global(.menuref), .wrapper :global(.button) {
  font-weight: normal;
  background-color: rgba(242, 242, 242, 0.84);
  border: 1px solid rgba(217, 217, 217, 0.84);
  padding: 3px 5px;
  border-radius: 3px;
  font-family: "Fira Mono", monospace;
  font-size: 1rem;
}

.wrapper :global(.menuseq) {
  word-spacing: -.02em;
  color: rgba(0, 0, 0, 0.84);
}

.wrapper :global(.menuseq b.caret) {
  font-size: 2rem;
  line-height: .8;
}

.wrapper :global(.menuseq i.caret) {
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.84);
  font-weight: bold;
  text-align: center;
  width: .45em;
}

.wrapper :global(.fa) {
  display: inline-block;
  font: normal normal normal 14px/1 "Fira Sans";
  font-size: inherit;
}

.wrapper :global(.fa-angle-right:before) {
  content: "›";
}

.wrapper :global(mark) {
  background-color: #ffb3db;
  transition: all 80ms ease-in-out;
  padding: 0px 5px;
}

.wrapper :global(mark:hover) {
  background-color: #ff33a0;
  color: white;
}

.wrapper :global(sup) {
  color: #FF0088;
  margin-left: 5px;
  font-size: 1rem;
}

.wrapper :global(.admonitionblock) {
  font-size: 1.25rem;
}

.wrapper :global(.admonitionblock.note), .wrapper :global(.admonitionblock.tip), .wrapper :global(.admonitionblock.important), .wrapper :global(.admonitionblock.warning), .wrapper :global(.admonitionblock.caution) {
  padding: 1rem;
}

.wrapper :global(.admonitionblock.note td.icon div), .wrapper :global(.admonitionblock.tip td.icon div), .wrapper :global(.admonitionblock.important td.icon div), .wrapper :global(.admonitionblock.warning td.icon div), .wrapper :global(.admonitionblock.caution td.icon div) {
  margin: 0 2rem;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  user-select: none;
}

.wrapper :global(.admonitionblock.note) {
  background-color: #f4faff;
  border: 1px solid #c1e4ff;
  border-radius: 3px;
}

.wrapper :global(.admonitionblock.note td.icon div) {
  color: #5bb7ff;
}

.wrapper :global(.admonitionblock.tip) {
  background-color: #d1f1d9;
  border: 1px solid #aae5ba;
  border-radius: 3px;
}

.wrapper :global(.admonitionblock.tip td.icon div) {
  color: #34a853;
}

.wrapper :global(.admonitionblock.important) {
  background-color: #ebf2fe;
  border: 1px solid #bad3fb;
  border-radius: 3px;
}

.wrapper :global(.admonitionblock.important td.icon div) {
  color: #4285f4;
}

.wrapper :global(.admonitionblock.warning) {
  background-color: #feebb4;
  border: 1px solid #fdde82;
  border-radius: 3px;
}

.wrapper :global(.admonitionblock.warning td.icon div) {
  color: #c99603;
}

.wrapper :global(.admonitionblock.caution) {
  background-color: #fbd9d7;
  border: 1px solid #f6aea8;
  border-radius: 3px;
}

.wrapper :global(.admonitionblock.caution td.icon div) {
  color: #ea4335;
}

.wrapper :global(.conum[data-value]) {
  display: inline-block;
  color: #FF0088 !important;
  background: #28a1ff;
  background: #ffcce7;
  border-radius: 100px;
  text-align: center;
  font-size: .75em;
  width: 1.67em;
  height: 1.67em;
  line-height: 1.67em;
  font-family: "Open Sans","DejaVu Sans",sans-serif;
  font-style: normal;
  margin-right: 0.5rem;
}

.wrapper :global(.conum[data-value] *) {
  color: #fff !important;
}

.wrapper :global(.conum[data-value] + b) {
  display: none;
}

.wrapper :global(.conum[data-value]::after) {
  content: attr(data-value);
}

.wrapper :global(pre .conum[data-value]) {
  position: relative;
  top: -.125em;
}

.wrapper :global(hr) {
  border: none;
  border-top: 1px solid #ff66b8;
}

.wrapper :global(b.conum *) {
  color: inherit !important;
}

.wrapper :global(.conum:not([data-value]):empty) {
  display: none;
}

.wrapper :global(ol > li p) {
  margin-bottom: .625em;
}

.wrapper :global(ul > li p), .wrapper :global(ul dd) {
  margin-bottom: .625em;
}

.wrapper :global(ol dd), .wrapper :global(.olist .olist) {
  margin-bottom: .625em;
}

.wrapper :global(.ulist .ulist), .wrapper :global(.ulist .olist) {
  margin-bottom: .625em;
}

.wrapper :global(.olist .ulist) {
  margin-bottom: .625em;
}

.wrapper :global(ul.checklist), .wrapper :global(ul.none) {
  list-style-type: none;
}

.wrapper :global(ol.none), .wrapper :global(ul.no-bullet) {
  list-style-type: none;
}

.wrapper :global(ol.no-bullet), .wrapper :global(ol.unnumbered) {
  list-style-type: none;
}

.wrapper :global(ul.unstyled), .wrapper :global(ol.unstyled) {
  list-style-type: none;
}

.wrapper :global(ul.no-bullet) {
  margin-left: .625em;
}

.wrapper :global(ol.no-bullet), .wrapper :global(ol.unnumbered) {
  margin-left: .625em;
}

.wrapper :global(ul.unstyled), .wrapper :global(ol.unstyled) {
  margin-left: 0;
}

.wrapper :global(ul.checklist) {
  margin-left: .625em;
}

.wrapper :global(ul.checklist li > p:first-child > .fa-square-o:first-child), .wrapper :global(ul.checklist li > p:first-child > .fa-check-square-o:first-child) {
  width: 1.25em;
  font-size: .8em;
  position: relative;
  bottom: .125em;
}

.wrapper :global(ul.checklist li > p:first-child > input[type="checkbox"]:first-child) {
  margin-right: .25em;
}

.wrapper :global(ul.inline) {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-flow: row wrap;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
  list-style: none;
  margin: 0 0 .625em -1.25em;
}

.wrapper :global(ul.inline > li) {
  margin-left: 1.25em;
}

.wrapper :global(.unstyled dl dt) {
  font-weight: 400;
  font-style: normal;
}

.wrapper :global(ol.arabic) {
  list-style-type: decimal;
}

.wrapper :global(ol.decimal) {
  list-style-type: decimal-leading-zero;
}

.wrapper :global(ol.loweralpha) {
  list-style-type: lower-alpha;
}

.wrapper :global(ol.upperalpha) {
  list-style-type: upper-alpha;
}

.wrapper :global(ol.lowerroman) {
  list-style-type: lower-roman;
}

.wrapper :global(ol.upperroman) {
  list-style-type: upper-roman;
}

.wrapper :global(ol.lowergreek) {
  list-style-type: lower-greek;
}

.wrapper :global(.fa-square-o:before) {
  content: "☐";
  font-size: 1.25rem;
  position: absolute;
  margin-top: -13px;
}

.wrapper :global(.fa-check-square-o:before) {
  content: "☑";
  font-size: 1.25rem;
  position: absolute;
  margin-top: -13px;
}

/* Glyph, by Harry Roberts */

.wrapper :global(hr.style-eight) {
    overflow: visible; /* For IE */
    padding: 0;
    border: none;
    color: #333;
    text-align: center;
    margin-top: 2rem;
}
.wrapper :global(hr.style-eight:after) {
    content: "§";
    display: inline-block;
    position: relative;
    top: -0.7em;
    font-size: 1.5em;
    padding: 0 0.25em;
    background: white;
}


</style>

<svelte:head>
	<title>{book.title} - Jeffrey Jose</title>
</svelte:head>

<template>
  <div class='book' in:fade='{{duration: 300}}' out:fade='{{ duration: 0}}'>
    <div class='bookitem'>
        <div class='wrapper'>
          <div class="toolbar">
            <p class="link"><a rel="prefetch" href="/books">Back to books</a></p>
          </div>
          <div class="contents">
            {@html book.fullhtml}
          </div>
          <div class="endofbook">
            <p class="tweet"><a href="{tweetURL}"><span class="icon"><Icon icon={faTwitter}></Icon></span>Enjoying so far? Tweet about this</a></p>
            <p class="link"><a rel="prefetch" href="/books">Back to books</a></p>
          </div>
        </div>
    </div>
  </div>
</template>
