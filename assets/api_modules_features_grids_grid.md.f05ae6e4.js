import{_ as e,c as t,o as d,a}from"./app.5f8923ba.js";const f='{"title":"Module: features/grids/grid","description":"","frontmatter":{},"headers":[{"level":2,"title":"Interfaces","slug":"interfaces"},{"level":2,"title":"Type aliases","slug":"type-aliases"},{"level":3,"title":"CellComputable","slug":"cellcomputable"},{"level":3,"title":"GenericGrid","slug":"genericgrid"},{"level":3,"title":"Grid","slug":"grid"},{"level":2,"title":"Variables","slug":"variables"},{"level":3,"title":"GridType","slug":"gridtype"},{"level":2,"title":"Functions","slug":"functions"},{"level":3,"title":"createGrid","slug":"creategrid"}],"relativePath":"api/modules/features/grids/grid.md"}',r={},i=a('<h1 id="module-features-grids-grid" tabindex="-1">Module: features/grids/grid <a class="header-anchor" href="#module-features-grids-grid" aria-hidden="true">#</a></h1><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-hidden="true">#</a></h2><ul><li><a href="../../../interfaces/features/grids/grid.BaseGrid">BaseGrid</a></li><li><a href="../../../interfaces/features/grids/grid.GridCell">GridCell</a></li><li><a href="../../../interfaces/features/grids/grid.GridOptions">GridOptions</a></li></ul><h2 id="type-aliases" tabindex="-1">Type aliases <a class="header-anchor" href="#type-aliases" aria-hidden="true">#</a></h2><h3 id="cellcomputable" tabindex="-1">CellComputable <a class="header-anchor" href="#cellcomputable" aria-hidden="true">#</a></h3><p>\u01AC <strong>CellComputable</strong>&lt;<code>T</code>&gt;: <a href="./../../util/computed.html#computable"><code>Computable</code></a>&lt;<code>T</code>&gt; | (<code>id</code>: <code>string</code> | <code>number</code>, <code>state</code>: <a href="./../../game/persistence.html#state"><code>State</code></a>) =&gt; <code>T</code></p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/d680e46/src/features/grids/grid.ts#L26" target="_blank" rel="noopener noreferrer">profectus/src/features/grids/grid.ts:26</a></p><hr><h3 id="genericgrid" tabindex="-1">GenericGrid <a class="header-anchor" href="#genericgrid" aria-hidden="true">#</a></h3><p>\u01AC <strong>GenericGrid</strong>: <a href="./../feature.html#replace"><code>Replace</code></a>&lt;<a href="./grid.html#grid"><code>Grid</code></a>&lt;<a href="../../../interfaces/features/grids/grid.GridOptions"><code>GridOptions</code></a>&gt;, { <code>getCanClick</code>: <a href="./../../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt; ; <code>getVisibility</code>: <a href="./../../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="../../../enums/features/feature.Visibility"><code>Visibility</code></a>&gt; ; <code>visibility</code>: <a href="./../../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="../../../enums/features/feature.Visibility"><code>Visibility</code></a>&gt; }&gt;</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/d680e46/src/features/grids/grid.ts#L234" target="_blank" rel="noopener noreferrer">profectus/src/features/grids/grid.ts:234</a></p><hr><h3 id="grid" tabindex="-1">Grid <a class="header-anchor" href="#grid" aria-hidden="true">#</a></h3><p>\u01AC <strong>Grid</strong>&lt;<code>T</code>&gt;: <a href="./../feature.html#replace"><code>Replace</code></a>&lt;<code>T</code> &amp; <a href="../../../interfaces/features/grids/grid.BaseGrid"><code>BaseGrid</code></a>, { <code>cols</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;cols&quot;</code>]&gt; ; <code>getCanClick</code>: <a href="./../../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;getCanClick&quot;</code>], <code>true</code>&gt; ; <code>getClasses</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;getClasses&quot;</code>]&gt; ; <code>getDisplay</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;getDisplay&quot;</code>]&gt; ; <code>getStartState</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;getStartState&quot;</code>]&gt; ; <code>getStyle</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;getStyle&quot;</code>]&gt; ; <code>getTitle</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;getTitle&quot;</code>]&gt; ; <code>getVisibility</code>: <a href="./../../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;getVisibility&quot;</code>], <a href="./../../../enums/features/feature.Visibility.html#visible"><code>Visible</code></a>&gt; ; <code>rows</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;rows&quot;</code>]&gt; ; <code>visibility</code>: <a href="./../../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;visibility&quot;</code>], <a href="./../../../enums/features/feature.Visibility.html#visible"><code>Visible</code></a>&gt; }&gt;</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../../interfaces/features/grids/grid.GridOptions"><code>GridOptions</code></a></td></tr></tbody></table><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/d680e46/src/features/grids/grid.ts#L218" target="_blank" rel="noopener noreferrer">profectus/src/features/grids/grid.ts:218</a></p><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-hidden="true">#</a></h2><h3 id="gridtype" tabindex="-1">GridType <a class="header-anchor" href="#gridtype" aria-hidden="true">#</a></h3><p>\u2022 <code>Const</code> <strong>GridType</strong>: typeof <a href="./grid.html#gridtype"><code>GridType</code></a></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/d680e46/src/features/grids/grid.ts#L24" target="_blank" rel="noopener noreferrer">profectus/src/features/grids/grid.ts:24</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h2><h3 id="creategrid" tabindex="-1">createGrid <a class="header-anchor" href="#creategrid" aria-hidden="true">#</a></h3><p>\u25B8 <strong>createGrid</strong>&lt;<code>T</code>&gt;(<code>optionsFunc</code>): <a href="./grid.html#grid"><code>Grid</code></a>&lt;<code>T</code>&gt;</p><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../../interfaces/features/grids/grid.GridOptions"><code>GridOptions</code></a></td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc</code></td><td style="text-align:left;">() =&gt; <code>T</code> &amp; <code>ThisType</code>&lt;<a href="./grid.html#grid"><code>Grid</code></a>&lt;<code>T</code>&gt;&gt;</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><a href="./grid.html#grid"><code>Grid</code></a>&lt;<code>T</code>&gt;</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/d680e46/src/features/grids/grid.ts#L243" target="_blank" rel="noopener noreferrer">profectus/src/features/grids/grid.ts:243</a></p>',38),o=[i];function c(l,s,h,n,u,p){return d(),t("div",null,o)}var b=e(r,[["render",c]]);export{f as __pageData,b as default};
