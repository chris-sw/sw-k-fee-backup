<?php

/**
 *
 * Available variables:
 * - Body field:			$node->body['und'][0]['value']
 *
 * - etc...
 *
 * - Var from template.tpl:	$kfee_custom_var
 * - print render($kfee_custom_var)
 *
 * @see print_r ($node)
 * 
 */

?>

      <div class="m6-moodblock">
      <?php if (isset($node->field_module_headline['und'][0]['value'])) {?>
      <div class="module-headline"><?php echo $node->field_module_headline['und'][0]['value'];?></div>
      <?php } ?>
        <?php 
        if (isset($node->body['und'][0]['value'])) {
          echo $node->body['und'][0]['value']; 
        }
        ?>	
      </div>
 