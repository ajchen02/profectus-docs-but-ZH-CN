import{_ as e,c as t,o as a,a as o}from"./app.5f8923ba.js";const m='{"title":"Module: data/common","description":"","frontmatter":{},"headers":[{"level":2,"title":"Interfaces","slug":"interfaces"},{"level":2,"title":"Type aliases","slug":"type-aliases"},{"level":3,"title":"GenericLayerTreeNode","slug":"genericlayertreenode"},{"level":3,"title":"GenericResetButton","slug":"genericresetbutton"},{"level":3,"title":"LayerTreeNode","slug":"layertreenode"},{"level":3,"title":"ResetButton","slug":"resetbutton"},{"level":2,"title":"Functions","slug":"functions"},{"level":3,"title":"createLayerTreeNode","slug":"createlayertreenode"},{"level":3,"title":"createResetButton","slug":"createresetbutton"}],"relativePath":"api/modules/data/common.md"}',d={},r=o('<h1 id="module-data-common" tabindex="-1">Module: data/common <a class="header-anchor" href="#module-data-common" aria-hidden="true">#</a></h1><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-hidden="true">#</a></h2><ul><li><a href="../../interfaces/data/common.LayerTreeNodeOptions">LayerTreeNodeOptions</a></li><li><a href="../../interfaces/data/common.ResetButtonOptions">ResetButtonOptions</a></li></ul><h2 id="type-aliases" tabindex="-1">Type aliases <a class="header-anchor" href="#type-aliases" aria-hidden="true">#</a></h2><h3 id="genericlayertreenode" tabindex="-1">GenericLayerTreeNode <a class="header-anchor" href="#genericlayertreenode" aria-hidden="true">#</a></h3><p>\u01AC <strong>GenericLayerTreeNode</strong>: <a href="./../features/feature.html#replace"><code>Replace</code></a>&lt;<a href="./common.html#layertreenode"><code>LayerTreeNode</code></a>&lt;<a href="../../interfaces/data/common.LayerTreeNodeOptions"><code>LayerTreeNodeOptions</code></a>&gt;, { <code>append?</code>: <a href="./../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt; ; <code>display</code>: <a href="./../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>string</code>&gt; }&gt;</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/d680e46/src/data/common.tsx#L133" target="_blank" rel="noopener noreferrer">profectus/src/data/common.tsx:133</a></p><hr><h3 id="genericresetbutton" tabindex="-1">GenericResetButton <a class="header-anchor" href="#genericresetbutton" aria-hidden="true">#</a></h3><p>\u01AC <strong>GenericResetButton</strong>: <a href="./../features/feature.html#replace"><code>Replace</code></a>&lt;<a href="./../features/clickables/clickable.html#genericclickable"><code>GenericClickable</code></a> &amp; <a href="./common.html#resetbutton"><code>ResetButton</code></a>&lt;<a href="../../interfaces/data/common.ResetButtonOptions"><code>ResetButtonOptions</code></a>&gt;, { <code>canClick</code>: <a href="./../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt; ; <code>display</code>: <a href="./../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../features/feature.html#coercablecomponent"><code>CoercableComponent</code></a>&gt; ; <code>resetDescription</code>: <a href="./../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>string</code>&gt; ; <code>showNextAt</code>: <a href="./../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt; }&gt;</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/d680e46/src/data/common.tsx#L49" target="_blank" rel="noopener noreferrer">profectus/src/data/common.tsx:49</a></p><hr><h3 id="layertreenode" tabindex="-1">LayerTreeNode <a class="header-anchor" href="#layertreenode" aria-hidden="true">#</a></h3><p>\u01AC <strong>LayerTreeNode</strong>&lt;<code>T</code>&gt;: <a href="./../features/feature.html#replace"><code>Replace</code></a>&lt;<a href="./../features/trees/tree.html#treenode"><code>TreeNode</code></a>&lt;<code>T</code>&gt;, { <code>append</code>: <a href="./../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;append&quot;</code>]&gt; ; <code>display</code>: <a href="./../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;display&quot;</code>], <code>T</code>[<code>&quot;layerID&quot;</code>]&gt; }&gt;</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../interfaces/data/common.LayerTreeNodeOptions"><code>LayerTreeNodeOptions</code></a></td></tr></tbody></table><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/d680e46/src/data/common.tsx#L126" target="_blank" rel="noopener noreferrer">profectus/src/data/common.tsx:126</a></p><hr><h3 id="resetbutton" tabindex="-1">ResetButton <a class="header-anchor" href="#resetbutton" aria-hidden="true">#</a></h3><p>\u01AC <strong>ResetButton</strong>&lt;<code>T</code>&gt;: <a href="./../features/feature.html#replace"><code>Replace</code></a>&lt;<a href="./../features/clickables/clickable.html#clickable"><code>Clickable</code></a>&lt;<code>T</code>&gt;, { <code>canClick</code>: <a href="./../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;canClick&quot;</code>], <code>Ref</code>&lt;<code>boolean</code>&gt;&gt; ; <code>display</code>: <a href="./../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;display&quot;</code>], <code>Ref</code>&lt;<code>JSX.Element</code>&gt;&gt; ; <code>onClick</code>: <code>VoidFunction</code> ; <code>resetDescription</code>: <a href="./../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;resetDescription&quot;</code>], <code>Ref</code>&lt;<code>string</code>&gt;&gt; ; <code>showNextAt</code>: <a href="./../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;showNextAt&quot;</code>], <code>true</code>&gt; }&gt;</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../interfaces/data/common.ResetButtonOptions"><code>ResetButtonOptions</code></a></td></tr></tbody></table><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/d680e46/src/data/common.tsx#L38" target="_blank" rel="noopener noreferrer">profectus/src/data/common.tsx:38</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h2><h3 id="createlayertreenode" tabindex="-1">createLayerTreeNode <a class="header-anchor" href="#createlayertreenode" aria-hidden="true">#</a></h3><p>\u25B8 <strong>createLayerTreeNode</strong>&lt;<code>T</code>&gt;(<code>optionsFunc</code>): <a href="./common.html#layertreenode"><code>LayerTreeNode</code></a>&lt;<code>T</code>&gt;</p><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../interfaces/data/common.LayerTreeNodeOptions"><code>LayerTreeNodeOptions</code></a></td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc</code></td><td style="text-align:left;">() =&gt; <code>T</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><a href="./common.html#layertreenode"><code>LayerTreeNode</code></a>&lt;<code>T</code>&gt;</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/d680e46/src/data/common.tsx#L141" target="_blank" rel="noopener noreferrer">profectus/src/data/common.tsx:141</a></p><hr><h3 id="createresetbutton" tabindex="-1">createResetButton <a class="header-anchor" href="#createresetbutton" aria-hidden="true">#</a></h3><p>\u25B8 <strong>createResetButton</strong>&lt;<code>T</code>&gt;(<code>optionsFunc</code>): <a href="./common.html#resetbutton"><code>ResetButton</code></a>&lt;<code>T</code>&gt;</p><h4 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../interfaces/features/clickables/clickable.ClickableOptions"><code>ClickableOptions</code></a> &amp; <a href="../../interfaces/data/common.ResetButtonOptions"><code>ResetButtonOptions</code></a></td></tr></tbody></table><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc</code></td><td style="text-align:left;">() =&gt; <code>T</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><a href="./common.html#resetbutton"><code>ResetButton</code></a>&lt;<code>T</code>&gt;</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/d680e46/src/data/common.tsx#L59" target="_blank" rel="noopener noreferrer">profectus/src/data/common.tsx:59</a></p>',49),c=[r];function n(l,s,i,h,p,u){return a(),t("div",null,c)}var b=e(d,[["render",n]]);export{m as __pageData,b as default};
