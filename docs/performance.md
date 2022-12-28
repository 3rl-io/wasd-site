# Performance Tweaks

The `inherit-hdr`, `if-shadows-enabled`, and `if-shadows-disabled` directives can help with performance. They are passed down recursively from any node to its children.

```html
<ax-gltf-model src="myAsset.glb" inherit-hdr if-shadows-enabled></ax-gltf-model>

<ax-obj if-shadows-disabled>
    <ax-light type="ambient" color="#fff"></ax-light>
    <ax-gltf-model src="myAsset-decimated.glb"></ax-gltf-model>
</ax-obj>
```

The above markup will render based on the `window.axis.settings.shadows` value, and re-render if the value is changed.

If shadows are enabled, the main asset will be loaded and inherit HDR envmap from the ax-scene's hdr-environment.

If shadows are disabled, a decimated version of the asset will be loaded without envmap. To compensate for the lack of HDR, an ambient light will be activated.

### Full HDR

If the app will only be used on high-performance devices, you can apply HDR at the scene level. This will ignore all `inherit-hdr` directives.

```html
<ax-scene hdr-environment="url: nightsky.hdr; envMap: scene"></ax-scene>
```

The default value for envMap is `selective` and doesn't need to be specified.
