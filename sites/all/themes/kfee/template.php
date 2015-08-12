<?php


/**
 * Helper function to find and render a block.
 */
function render_block_content($module, $delta) {
  $output = '';
  if ($block = block_load($module, $delta)) {
    if ($build = module_invoke($module, 'block_view', $delta)) {
      $delta = str_replace('-', '_', $delta);
      drupal_alter(array('block_view', "block_view_{$module}_{$delta}"), $build, $block);

      if (!empty($build['content'])) {
        return is_array($build['content']) ? render($build['content']) : $build['content'];
      }
    }
  }
  return $output;
}



function kfee_preprocess_page(&$variables) {
    // Get the alias for the page being viewed
    $alias = drupal_get_path_alias($_GET['q']);
    if ($alias != $_GET['q']) {
        $template_filename = 'page';

        //Break it down for each piece of the alias path
        foreach (explode('/', $alias) as $path_part) {
            $template_filename = $template_filename . '__' . $path_part;
            $variables['theme_hook_suggestions'][] = $template_filename;
        }
    }
}

function kfee_preprocess_node(&$variables){
  $variables['kfee_custom_var'] = "I am a custom variable";
}