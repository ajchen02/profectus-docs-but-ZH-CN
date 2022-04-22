#动态Layers
使用`addLayer`和`removeLayer`函数，你可以动态的增加/删除Layer。请注意，删除一个layer并不会影响玩家的存档，所以你可以安全的增加和删除相同的layer。实际上，有个`reloadLayer`的函数就是这么做的，你可以在某个layer的结构需要改变时调用 - 例如增加新feature时。

如果你想要自动生成Layers（都使用相似的结构），可能用一个多功能的函数（如下所示）来简单的 access a correctly typed reference to a layer with a given ID:

```ts
function getDynLayer(id: string): DynamicLayer {
  const layer = layers[id];
  if (!layer) throw "Layer不存在";
  return layer as DynamicLayer; // you might need an "as unknown" after layer
}
```
