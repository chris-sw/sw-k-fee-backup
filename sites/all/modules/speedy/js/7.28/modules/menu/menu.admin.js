(function(e){Drupal.behaviors.menuChangeParentItems={attach:function(t,n){e("fieldset#edit-menu input").each(function(){e(this).change(function(){Drupal.menu_update_parent_list()})})}},Drupal.menu_update_parent_list=function(){var t=[];e("input:checked",e("fieldset#edit-menu")).each(function(){t.push(Drupal.checkPlain(e.trim(e(this).val())))});var n=Drupal.settings.basePath+"admin/structure/menu/parents";e.ajax({url:location.protocol+"//"+location.host+n,type:"POST",data:{"menus[]":t},dataType:"json",success:function(t){var n=e("fieldset#edit-menu #edit-menu-parent :selected").val();e("fieldset#edit-menu #edit-menu-parent").children().remove(),jQuery.each(t,function(t,r){e("fieldset#edit-menu #edit-menu-parent").append(e("<option "+(t==n?' selected="selected"':"")+"></option>").val(t).text(r))})}})}})(jQuery);