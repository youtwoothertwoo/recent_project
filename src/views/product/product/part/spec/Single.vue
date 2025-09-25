<template>
  <!--
    	作者：luoyiming
    	时间：2019-10-26
    	描述：商品管理-商品编辑-规格/库存-单规格
    -->
  <div>
    <el-form-item label="产品编码：" :rules="[{ required: true, message: '请填写产品编码' }]" prop="model.sku.product_no">
      <el-input v-model="form.model.sku.product_no" class="max-w460"></el-input>
    </el-form-item>
    <el-form-item label="产品价格：" width="80" :rules="[{ required: true, message: '请填写产品价格' }]" prop="model.sku.product_price">
      <el-input type="number" v-model="form.model.sku.product_price" class="max-w460"></el-input>
    </el-form-item>
    <el-form-item label="补贴金额：" width="80" :rules="[{ required: true, message: '请填写补贴金额' }]" prop="model.sku.subsidy_money">
      <el-input type="number" v-model="form.model.sku.subsidy_money" class="max-w460"></el-input>
    </el-form-item>
    <el-form-item label="区县价格：" width="80" :rules="[{ required: true, message: '请填写区县价格' }]" prop="model.sku.district_price">
      <el-input type="number" v-model="form.model.sku.district_price" class="max-w460"></el-input>
    </el-form-item>
    <el-form-item label="店中店价格：" width="80" :rules="[{ required: true, message: '请填写店中店价格' }]" prop="model.sku.shop_price">
      <el-input type="number" v-model="form.model.sku.shop_price" class="max-w460"></el-input>
    </el-form-item>
    <el-form-item label="星级价格：" width="80" :rules="[{ required: true, message: '请填写星级价格' }]" prop="model.sku.star_price">
      <el-input type="number" v-model="form.model.sku.star_price" class="max-w460"></el-input>
    </el-form-item>
    <el-form-item label="产品划线价：" :rules="[{ required: true, message: '请填写产品划线价' }]" prop="model.sku.line_price">
      <el-input type="number" v-model="form.model.sku.line_price" class="max-w460"></el-input>
     </el-form-item>
    <el-form-item label="库存数量：" :rules="[{ required: true, message: '请填写库存数量' }]" prop="model.sku.stock_num">
      <el-input type="number" v-model="form.model.sku.stock_num" class="max-w460"></el-input>
    </el-form-item>
    <el-form-item label="商品重量(Kg)：" :rules="[{ required: true, message: '请填写商品重量' }]" prop="model.sku.product_weight">
      <el-input type="number" v-model="form.model.sku.product_weight" class="max-w460"></el-input>
    </el-form-item>
  </div>
</template>

<script>
  export default{
    inject: ['form']
  }
</script>

<style></style>
