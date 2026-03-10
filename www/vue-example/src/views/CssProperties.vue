<template>
  <div class="css-properties-page">
    <h2 class="page-title">CSS Properties Showcase</h2>
    <p class="page-desc">Each card demonstrates a specific CSS property rendered in the DOM. Export to PDF to verify vector fidelity.</p>

    <!-- Dimensions -->
    <section class="prop-section">
      <h3 class="section-title">Dimensions</h3>
      <div class="prop-grid">
        <div class="prop-card">
          <div class="prop-label">width / height</div>
          <div class="demo-box" style="width: 120px; height: 80px; background: #409eff;" />
          <code>width: 120px; height: 80px</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">min-width / max-width</div>
          <div class="demo-box" style="min-width: 60px; max-width: 200px; width: 100%; height: 50px; background: #67c23a;" />
          <code>min-width: 60px; max-width: 200px</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">aspect-ratio</div>
          <div class="demo-box" style="width: 100px; aspect-ratio: 16/9; background: #e6a23c;" />
          <code>width: 100px; aspect-ratio: 16/9</code>
        </div>
      </div>
    </section>

    <!-- Box Model -->
    <section class="prop-section">
      <h3 class="section-title">Box Model</h3>
      <div class="prop-grid">
        <div class="prop-card">
          <div class="prop-label">padding</div>
          <div class="demo-box" style="padding: 20px; background: #ecf5ff; border: 1px dashed #409eff;">
            <div style="background: #409eff; height: 30px; border-radius: 4px;" />
          </div>
          <code>padding: 20px</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">margin</div>
          <div style="background: #fdf6ec; padding: 4px;">
            <div class="demo-box" style="margin: 16px; background: #e6a23c; height: 40px;" />
          </div>
          <code>margin: 16px</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">box-sizing</div>
          <div class="demo-box" style="width: 120px; height: 60px; padding: 15px; border: 5px solid #f56c6c; background: #fef0f0; box-sizing: border-box;">
            <span style="font-size: 11px; color: #f56c6c;">border-box</span>
          </div>
          <code>box-sizing: border-box</code>
        </div>
      </div>
    </section>

    <!-- Border -->
    <section class="prop-section">
      <h3 class="section-title">Border</h3>
      <div class="prop-grid">
        <div class="prop-card">
          <div class="prop-label">border-width / style / color</div>
          <div class="demo-box" style="width: 100px; height: 60px; border: 3px solid #409eff; background: #fff;" />
          <code>border: 3px solid #409eff</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">border-radius</div>
          <div class="demo-box" style="width: 80px; height: 80px; border-radius: 50%; background: #67c23a;" />
          <code>border-radius: 50%</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">border (mixed)</div>
          <div class="demo-box" style="width: 100px; height: 60px; border-top: 4px solid #f56c6c; border-right: 4px dashed #e6a23c; border-bottom: 4px dotted #67c23a; border-left: 4px double #409eff; background: #fff;" />
          <code>border: mixed styles</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">border-radius (asymmetric)</div>
          <div class="demo-box" style="width: 120px; height: 60px; border-radius: 20px 4px 20px 4px; background: #909399;" />
          <code>border-radius: 20px 4px 20px 4px</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">outline</div>
          <div class="demo-box" style="width: 80px; height: 50px; outline: 3px solid #e6a23c; outline-offset: 4px; background: #fdf6ec;" />
          <code>outline: 3px solid; offset: 4px</code>
        </div>
      </div>
    </section>

    <!-- Background -->
    <section class="prop-section">
      <h3 class="section-title">Background</h3>
      <div class="prop-grid">
        <div class="prop-card">
          <div class="prop-label">background-color</div>
          <div class="demo-box" style="width: 100px; height: 60px; background-color: #b3d8ff;" />
          <code>background-color: #b3d8ff</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">linear-gradient</div>
          <div class="demo-box" style="width: 120px; height: 60px; background: linear-gradient(135deg, #409eff, #67c23a);" />
          <code>linear-gradient(135deg, ...)</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">radial-gradient</div>
          <div class="demo-box" style="width: 100px; height: 100px; border-radius: 50%; background: radial-gradient(circle, #f56c6c, #303133);" />
          <code>radial-gradient(circle, ...)</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">background-image (url)</div>
          <div class="demo-box" style="width: 120px; height: 80px; background: url('https://picsum.photos/120/80') center/cover no-repeat; border-radius: 8px;" />
          <code>background-image: url(...)</code>
        </div>
      </div>
    </section>

    <!-- Typography -->
    <section class="prop-section">
      <h3 class="section-title">Typography</h3>
      <div class="prop-grid">
        <div class="prop-card">
          <div class="prop-label">font-size</div>
          <div class="demo-box text-demo">
            <span style="font-size: 12px;">12px</span>
            <span style="font-size: 16px;">16px</span>
            <span style="font-size: 24px;">24px</span>
            <span style="font-size: 32px;">32px</span>
          </div>
          <code>font-size: 12-32px</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">font-weight</div>
          <div class="demo-box text-demo">
            <span style="font-weight: 300;">Light</span>
            <span style="font-weight: 400;">Regular</span>
            <span style="font-weight: 600;">Semi Bold</span>
            <span style="font-weight: 700;">Bold</span>
          </div>
          <code>font-weight: 300-700</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">font-style</div>
          <div class="demo-box text-demo">
            <span style="font-style: normal;">Normal</span>
            <span style="font-style: italic;">Italic</span>
            <span style="font-style: oblique;">Oblique</span>
          </div>
          <code>font-style: normal / italic / oblique</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">text-decoration</div>
          <div class="demo-box text-demo">
            <span style="text-decoration: underline;">Underline</span>
            <span style="text-decoration: line-through;">Strikethrough</span>
            <span style="text-decoration: overline;">Overline</span>
          </div>
          <code>text-decoration</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">letter-spacing / word-spacing</div>
          <div class="demo-box text-demo" style="flex-direction: column; align-items: flex-start;">
            <span style="letter-spacing: 4px;">Letter Spacing</span>
            <span style="word-spacing: 12px;">Word Spacing Demo</span>
          </div>
          <code>letter-spacing / word-spacing</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">text-transform</div>
          <div class="demo-box text-demo" style="flex-direction: column; align-items: flex-start;">
            <span style="text-transform: uppercase;">uppercase text</span>
            <span style="text-transform: capitalize;">capitalize text</span>
            <span style="text-transform: lowercase;">LOWERCASE TEXT</span>
          </div>
          <code>text-transform</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">color</div>
          <div class="demo-box text-demo">
            <span style="color: #f56c6c;">Red</span>
            <span style="color: #67c23a;">Green</span>
            <span style="color: #409eff;">Blue</span>
            <span style="color: #e6a23c;">Orange</span>
          </div>
          <code>color: various</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">line-height</div>
          <div class="demo-box" style="width: 200px; font-size: 13px;">
            <p style="line-height: 1.2; margin-bottom: 8px; background: #ecf5ff; padding: 4px;">Line height 1.2 - This text has tight line spacing for compact layouts.</p>
            <p style="line-height: 2.0; background: #f0f9eb; padding: 4px;">Line height 2.0 - This text has loose line spacing for readability.</p>
          </div>
          <code>line-height: 1.2 / 2.0</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">text-align</div>
          <div class="demo-box" style="width: 180px; font-size: 12px;">
            <p style="text-align: left; background: #ecf5ff; padding: 4px; margin-bottom: 4px;">Left aligned</p>
            <p style="text-align: center; background: #fdf6ec; padding: 4px; margin-bottom: 4px;">Center aligned</p>
            <p style="text-align: right; background: #f0f9eb; padding: 4px;">Right aligned</p>
          </div>
          <code>text-align: left / center / right</code>
        </div>
      </div>
    </section>

    <!-- Layout -->
    <section class="prop-section">
      <h3 class="section-title">Layout</h3>
      <div class="prop-grid">
        <div class="prop-card">
          <div class="prop-label">display: flex</div>
          <div class="demo-box" style="display: flex; gap: 8px; padding: 8px; background: #ecf5ff;">
            <div style="flex: 1; height: 40px; background: #409eff; border-radius: 4px;" />
            <div style="flex: 2; height: 40px; background: #79bbff; border-radius: 4px;" />
            <div style="flex: 1; height: 40px; background: #a0cfff; border-radius: 4px;" />
          </div>
          <code>display: flex; flex: 1/2/1</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">display: grid</div>
          <div class="demo-box" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; padding: 8px; background: #f0f9eb;">
            <div v-for="i in 6" :key="i" style="height: 30px; background: #67c23a; border-radius: 4px;" />
          </div>
          <code>grid-template-columns: repeat(3, 1fr)</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">flex-direction / align / justify</div>
          <div class="demo-box" style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; height: 120px; padding: 8px; background: #fef0f0;">
            <div style="width: 60px; height: 24px; background: #f56c6c; border-radius: 4px;" />
            <div style="width: 80px; height: 24px; background: #f89898; border-radius: 4px;" />
            <div style="width: 40px; height: 24px; background: #fab6b6; border-radius: 4px;" />
          </div>
          <code>flex-direction: column; align/justify</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">gap</div>
          <div class="demo-box" style="display: flex; flex-wrap: wrap; gap: 12px; padding: 8px; background: #fdf6ec;">
            <div v-for="i in 8" :key="i" style="width: 36px; height: 36px; background: #e6a23c; border-radius: 4px;" />
          </div>
          <code>gap: 12px (flex-wrap)</code>
        </div>
      </div>
    </section>

    <!-- Positioning -->
    <section class="prop-section">
      <h3 class="section-title">Positioning</h3>
      <div class="prop-grid">
        <div class="prop-card">
          <div class="prop-label">position: relative + absolute</div>
          <div class="demo-box" style="position: relative; width: 150px; height: 100px; background: #ecf5ff;">
            <div style="position: absolute; top: 8px; left: 8px; width: 50px; height: 50px; background: #409eff; border-radius: 4px;" />
            <div style="position: absolute; bottom: 8px; right: 8px; width: 50px; height: 50px; background: #79bbff; border-radius: 4px;" />
          </div>
          <code>position: relative / absolute</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">z-index</div>
          <div class="demo-box" style="position: relative; width: 150px; height: 100px;">
            <div style="position: absolute; top: 10px; left: 10px; width: 70px; height: 70px; background: #f56c6c; z-index: 1; border-radius: 4px;" />
            <div style="position: absolute; top: 30px; left: 30px; width: 70px; height: 70px; background: #409eff; z-index: 2; border-radius: 4px;" />
            <div style="position: absolute; top: 50px; left: 50px; width: 70px; height: 70px; background: #67c23a; z-index: 3; border-radius: 4px;" />
          </div>
          <code>z-index: 1 / 2 / 3</code>
        </div>
      </div>
    </section>

    <!-- Transform -->
    <section class="prop-section">
      <h3 class="section-title">Transform</h3>
      <div class="prop-grid">
        <div class="prop-card">
          <div class="prop-label">rotate</div>
          <div class="demo-box" style="display: flex; align-items: center; justify-content: center; height: 100px;">
            <div style="width: 60px; height: 60px; background: #409eff; transform: rotate(45deg); border-radius: 4px;" />
          </div>
          <code>transform: rotate(45deg)</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">scale</div>
          <div class="demo-box" style="display: flex; align-items: center; justify-content: center; gap: 24px; height: 80px;">
            <div style="width: 30px; height: 30px; background: #67c23a; transform: scale(0.8); border-radius: 4px;" />
            <div style="width: 30px; height: 30px; background: #67c23a; border-radius: 4px;" />
            <div style="width: 30px; height: 30px; background: #67c23a; transform: scale(1.4); border-radius: 4px;" />
          </div>
          <code>scale(0.8) / 1.0 / scale(1.4)</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">skew</div>
          <div class="demo-box" style="display: flex; align-items: center; justify-content: center; height: 80px;">
            <div style="width: 80px; height: 40px; background: #e6a23c; transform: skewX(-15deg); border-radius: 4px;" />
          </div>
          <code>transform: skewX(-15deg)</code>
        </div>
      </div>
    </section>

    <!-- Opacity & Visibility -->
    <section class="prop-section">
      <h3 class="section-title">Opacity &amp; Visibility</h3>
      <div class="prop-grid">
        <div class="prop-card">
          <div class="prop-label">opacity</div>
          <div class="demo-box" style="display: flex; gap: 8px; align-items: center;">
            <div style="width: 40px; height: 40px; background: #409eff; opacity: 0.2; border-radius: 4px;" />
            <div style="width: 40px; height: 40px; background: #409eff; opacity: 0.5; border-radius: 4px;" />
            <div style="width: 40px; height: 40px; background: #409eff; opacity: 0.8; border-radius: 4px;" />
            <div style="width: 40px; height: 40px; background: #409eff; opacity: 1.0; border-radius: 4px;" />
          </div>
          <code>opacity: 0.2 / 0.5 / 0.8 / 1.0</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">visibility</div>
          <div class="demo-box" style="display: flex; gap: 8px; align-items: center;">
            <div style="width: 40px; height: 40px; background: #f56c6c; border-radius: 4px;" />
            <div style="width: 40px; height: 40px; background: #f56c6c; visibility: hidden; border-radius: 4px;" />
            <div style="width: 40px; height: 40px; background: #f56c6c; border-radius: 4px;" />
          </div>
          <code>visibility: hidden (middle)</code>
        </div>
      </div>
    </section>

    <!-- Overflow -->
    <section class="prop-section">
      <h3 class="section-title">Overflow</h3>
      <div class="prop-grid">
        <div class="prop-card">
          <div class="prop-label">overflow: hidden</div>
          <div class="demo-box" style="width: 100px; height: 60px; overflow: hidden; background: #ecf5ff;">
            <div style="width: 150px; height: 100px; background: linear-gradient(135deg, #409eff, #67c23a); border-radius: 8px;" />
          </div>
          <code>overflow: hidden</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">text-overflow: ellipsis</div>
          <div class="demo-box" style="width: 160px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding: 8px; background: #fdf6ec; font-size: 13px;">
            This is a very long text that should be truncated with an ellipsis
          </div>
          <code>text-overflow: ellipsis</code>
        </div>
      </div>
    </section>

    <!-- Shadow -->
    <section class="prop-section">
      <h3 class="section-title">Shadow</h3>
      <div class="prop-grid">
        <div class="prop-card">
          <div class="prop-label">box-shadow</div>
          <div class="demo-box" style="width: 100px; height: 60px; background: #fff; box-shadow: 0 4px 12px rgba(0,0,0,0.15); border-radius: 8px;" />
          <code>box-shadow: 0 4px 12px</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">box-shadow (inset)</div>
          <div class="demo-box" style="width: 100px; height: 60px; background: #fff; box-shadow: inset 0 2px 8px rgba(0,0,0,0.2); border-radius: 8px;" />
          <code>box-shadow: inset</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">text-shadow</div>
          <div class="demo-box" style="display: flex; align-items: center; justify-content: center;">
            <span style="font-size: 24px; font-weight: 700; color: #303133; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">Shadow</span>
          </div>
          <code>text-shadow: 2px 2px 4px</code>
        </div>
      </div>
    </section>

    <!-- List & Table -->
    <section class="prop-section">
      <h3 class="section-title">List &amp; Table</h3>
      <div class="prop-grid">
        <div class="prop-card">
          <div class="prop-label">list-style</div>
          <div class="demo-box" style="padding: 8px 8px 8px 28px; font-size: 13px;">
            <ul style="margin-bottom: 8px;">
              <li>Disc item one</li>
              <li>Disc item two</li>
            </ul>
            <ol>
              <li>Ordered one</li>
              <li>Ordered two</li>
            </ol>
          </div>
          <code>list-style: disc / decimal</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">table / border-collapse</div>
          <div class="demo-box" style="padding: 4px;">
            <table style="border-collapse: collapse; font-size: 12px; width: 100%;">
              <tr>
                <th style="border: 1px solid #dcdfe6; padding: 6px; background: #f5f7fa;">Name</th>
                <th style="border: 1px solid #dcdfe6; padding: 6px; background: #f5f7fa;">Value</th>
              </tr>
              <tr>
                <td style="border: 1px solid #dcdfe6; padding: 6px;">Alpha</td>
                <td style="border: 1px solid #dcdfe6; padding: 6px;">100</td>
              </tr>
              <tr>
                <td style="border: 1px solid #dcdfe6; padding: 6px;">Beta</td>
                <td style="border: 1px solid #dcdfe6; padding: 6px;">200</td>
              </tr>
            </table>
          </div>
          <code>border-collapse: collapse</code>
        </div>
      </div>
    </section>

    <!-- Image -->
    <section class="prop-section">
      <h3 class="section-title">Image</h3>
      <div class="prop-grid">
        <div class="prop-card">
          <div class="prop-label">img tag</div>
          <div class="demo-box">
            <img src="https://picsum.photos/seed/demo1/140/90" alt="sample" style="border-radius: 6px; display: block;" />
          </div>
          <code>&lt;img&gt; tag</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">object-fit: cover</div>
          <div class="demo-box">
            <img src="https://picsum.photos/seed/demo2/200/200" alt="cover" style="width: 120px; height: 70px; object-fit: cover; border-radius: 6px; display: block;" />
          </div>
          <code>object-fit: cover</code>
        </div>
        <div class="prop-card">
          <div class="prop-label">filter (CSS)</div>
          <div class="demo-box" style="display: flex; gap: 8px;">
            <img src="https://picsum.photos/seed/demo3/60/60" alt="normal" style="border-radius: 4px; display: block;" />
            <img src="https://picsum.photos/seed/demo3/60/60" alt="grayscale" style="filter: grayscale(100%); border-radius: 4px; display: block;" />
            <img src="https://picsum.photos/seed/demo3/60/60" alt="sepia" style="filter: sepia(100%); border-radius: 4px; display: block;" />
          </div>
          <code>filter: grayscale / sepia</code>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.css-properties-page {
  max-width: 960px;
}

.page-title {
  font-size: 24px;
  font-weight: 700;
  color: #1d1e20;
  margin-bottom: 6px;
}

.page-desc {
  color: #606266;
  font-size: 14px;
  margin-bottom: 28px;
}

.prop-section {
  margin-bottom: 32px;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  color: #303133;
  margin-bottom: 14px;
  padding-bottom: 8px;
  border-bottom: 2px solid #e4e7ed;
}

.prop-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.prop-card {
  background: #fff;
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 200px;
}

.prop-label {
  font-size: 13px;
  font-weight: 600;
  color: #606266;
}

.demo-box {
  border-radius: 4px;
}

.demo-box.text-demo {
  display: flex;
  gap: 10px;
  align-items: baseline;
  flex-wrap: wrap;
}

.prop-card code {
  font-size: 11px;
  color: #909399;
  background: #f5f7fa;
  padding: 3px 6px;
  border-radius: 4px;
  font-family: 'SF Mono', Menlo, Monaco, Consolas, monospace;
}
</style>
