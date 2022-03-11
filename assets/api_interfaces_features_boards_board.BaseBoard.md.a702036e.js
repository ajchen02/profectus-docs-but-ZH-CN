import{_ as e,c as r,o as a,a as t}from"./app.5f8923ba.js";const b='{"title":"Interface: BaseBoard","description":"","frontmatter":{},"headers":[{"level":2,"title":"Hierarchy","slug":"hierarchy"},{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"[Component]","slug":"component"},{"level":3,"title":"[DefaultValue]","slug":"defaultvalue"},{"level":3,"title":"[PersistentState]","slug":"persistentstate"},{"level":3,"title":"id","slug":"id"},{"level":3,"title":"links","slug":"links"},{"level":3,"title":"nodes","slug":"nodes"},{"level":3,"title":"selectedAction","slug":"selectedaction"},{"level":3,"title":"selectedNode","slug":"selectednode"},{"level":3,"title":"type","slug":"type"},{"level":2,"title":"Methods","slug":"methods"},{"level":3,"title":"[GatherProps]","slug":"gatherprops"}],"relativePath":"api/interfaces/features/boards/board.BaseBoard.md"}',d={},o=t('<h1 id="interface-baseboard" tabindex="-1">Interface: BaseBoard <a class="header-anchor" href="#interface-baseboard" aria-hidden="true">#</a></h1><p><a href="./../../../modules/features/boards/board.html">features/boards/board</a>.BaseBoard</p><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy" aria-hidden="true">#</a></h2><ul><li><p><a href="./../../../modules/game/persistence.html#persistent"><code>Persistent</code></a>&lt;<a href="./../../../modules/features/boards/board.html#boarddata"><code>BoardData</code></a>&gt;</p><p>\u21B3 <strong><code>BaseBoard</code></strong></p></li></ul><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="component" tabindex="-1">[Component] <a class="header-anchor" href="#component" aria-hidden="true">#</a></h3><p>\u2022 <strong>[Component]</strong>: <code>DefineComponent</code>&lt;<code>__VLS_TypePropsToRuntimeProps</code>&lt;<a href="./../../../modules/features/feature.html#featurecomponent"><code>FeatureComponent</code></a>&lt;<a href="./../../../modules/features/boards/board.html#genericboard"><code>GenericBoard</code></a>&gt;&gt;, {}, <code>unknown</code>, {}, {}, <code>ComponentOptionsMixin</code>, <code>ComponentOptionsMixin</code>, <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;, <code>string</code>, <code>PublicProps</code>, <code>Readonly</code>&lt;<code>ExtractPropTypes</code>&lt;<code>__VLS_TypePropsToRuntimeProps</code>&lt;<a href="./../../../modules/features/feature.html#featurecomponent"><code>FeatureComponent</code></a>&lt;<a href="./../../../modules/features/boards/board.html#genericboard"><code>GenericBoard</code></a>&gt;&gt;&gt;&gt;, {}&gt;</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/d680e46/src/features/boards/board.ts#L177" target="_blank" rel="noopener noreferrer">profectus/src/features/boards/board.ts:177</a></p><hr><h3 id="defaultvalue" tabindex="-1">[DefaultValue] <a class="header-anchor" href="#defaultvalue" aria-hidden="true">#</a></h3><p>\u2022 <strong>[DefaultValue]</strong>: <a href="./../../../modules/features/boards/board.html#boarddata"><code>BoardData</code></a></p><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from" aria-hidden="true">#</a></h4><p>Persistent.__@DefaultValue@18632</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/d680e46/src/game/persistence.ts#L25" target="_blank" rel="noopener noreferrer">profectus/src/game/persistence.ts:25</a></p><hr><h3 id="persistentstate" tabindex="-1">[PersistentState] <a class="header-anchor" href="#persistentstate" aria-hidden="true">#</a></h3><p>\u2022 <strong>[PersistentState]</strong>: <code>Ref</code>&lt;<a href="./../../../modules/features/boards/board.html#boarddata"><code>BoardData</code></a>&gt;</p><h4 id="inherited-from-1" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-1" aria-hidden="true">#</a></h4><p>Persistent.__@PersistentState@18630</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/d680e46/src/game/persistence.ts#L24" target="_blank" rel="noopener noreferrer">profectus/src/game/persistence.ts:24</a></p><hr><h3 id="id" tabindex="-1">id <a class="header-anchor" href="#id" aria-hidden="true">#</a></h3><p>\u2022 <strong>id</strong>: <code>string</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/d680e46/src/features/boards/board.ts#L171" target="_blank" rel="noopener noreferrer">profectus/src/features/boards/board.ts:171</a></p><hr><h3 id="links" tabindex="-1">links <a class="header-anchor" href="#links" aria-hidden="true">#</a></h3><p>\u2022 <strong>links</strong>: <code>Ref</code>&lt;<code>null</code> | <a href="./board.BoardNodeLink"><code>BoardNodeLink</code></a>[]&gt;</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/d680e46/src/features/boards/board.ts#L172" target="_blank" rel="noopener noreferrer">profectus/src/features/boards/board.ts:172</a></p><hr><h3 id="nodes" tabindex="-1">nodes <a class="header-anchor" href="#nodes" aria-hidden="true">#</a></h3><p>\u2022 <strong>nodes</strong>: <code>Ref</code>&lt;<a href="./board.BoardNode"><code>BoardNode</code></a>[]&gt;</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/d680e46/src/features/boards/board.ts#L173" target="_blank" rel="noopener noreferrer">profectus/src/features/boards/board.ts:173</a></p><hr><h3 id="selectedaction" tabindex="-1">selectedAction <a class="header-anchor" href="#selectedaction" aria-hidden="true">#</a></h3><p>\u2022 <strong>selectedAction</strong>: <code>Ref</code>&lt;<code>null</code> | <a href="./../../../modules/features/boards/board.html#genericboardnodeaction"><code>GenericBoardNodeAction</code></a>&gt;</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/d680e46/src/features/boards/board.ts#L175" target="_blank" rel="noopener noreferrer">profectus/src/features/boards/board.ts:175</a></p><hr><h3 id="selectednode" tabindex="-1">selectedNode <a class="header-anchor" href="#selectednode" aria-hidden="true">#</a></h3><p>\u2022 <strong>selectedNode</strong>: <code>Ref</code>&lt;<code>null</code> | <a href="./board.BoardNode"><code>BoardNode</code></a>&gt;</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/d680e46/src/features/boards/board.ts#L174" target="_blank" rel="noopener noreferrer">profectus/src/features/boards/board.ts:174</a></p><hr><h3 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-hidden="true">#</a></h3><p>\u2022 <strong>type</strong>: typeof <a href="./../../../modules/features/boards/board.html#boardtype"><code>BoardType</code></a></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/d680e46/src/features/boards/board.ts#L176" target="_blank" rel="noopener noreferrer">profectus/src/features/boards/board.ts:176</a></p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="gatherprops" tabindex="-1">[GatherProps] <a class="header-anchor" href="#gatherprops" aria-hidden="true">#</a></h3><p>\u25B8 <strong>[GatherProps]</strong>(): <code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt;</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt;</p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/d680e46/src/features/boards/board.ts#L178" target="_blank" rel="noopener noreferrer">profectus/src/features/boards/board.ts:178</a></p>',60),n=[o];function s(i,c,h,l,f,p){return a(),r("div",null,n)}var g=e(d,[["render",s]]);export{b as __pageData,g as default};
