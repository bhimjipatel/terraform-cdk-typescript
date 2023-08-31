// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
export const CUSTOM_DEFAULTS: { [fullName: string]: any } = {
  "aws.security_group.ingress.cidr_blocks": null,
  "aws.security_group.ingress.description": null,
  "aws.security_group.ingress.from_port": null,
  "aws.security_group.ingress.ipv6_cidr_blocks": null,
  "aws.security_group.ingress.prefix_list_ids": null,
  "aws.security_group.ingress.protocol": null,
  "aws.security_group.ingress.security_groups": null,
  "aws.security_group.ingress.self": null,
  "aws.security_group.ingress.to_port": null,
  "aws.security_group.egress.cidr_blocks": null,
  "aws.security_group.egress.description": null,
  "aws.security_group.egress.from_port": null,
  "aws.security_group.egress.ipv6_cidr_blocks": null,
  "aws.security_group.egress.prefix_list_ids": null,
  "aws.security_group.egress.protocol": null,
  "aws.security_group.egress.security_groups": null,
  "aws.security_group.egress.self": null,
  "aws.security_group.egress.to_port": null,

  "aws.default_route_table.route.cidr_block": null,
  "aws.default_route_table.route.ipv6_cidr_block": null,
  "aws.default_route_table.route.egress_only_gateway_id": null,
  "aws.default_route_table.route.gateway_id": null,
  "aws.default_route_table.route.instance_id": null,
  "aws.default_route_table.route.nat_gateway_id": null,
  "aws.default_route_table.route.network_interface_id": null,
  "aws.default_route_table.route.transit_gateway_id": null,
  "aws.default_route_table.route.vpc_endpoint_id": null,
  "aws.default_route_table.route.vpc_peering_connection_id": null,
  "aws.default_route_table.route.destination_prefix_list_id": null,
  "aws.default_route_table.route.core_network_arn": null,

  "aws.emr_cluster.step.action_on_failure": null,
  "aws.emr_cluster.step.hadoop_jar_step": null,
  "aws.emr_cluster.step.name": null,
  "aws.emr_cluster.step.hadoop_jar_step.args": null,
  "aws.emr_cluster.step.hadoop_jar_step.jar": null,
  "aws.emr_cluster.step.hadoop_jar_step.main_class": null,
  "aws.emr_cluster.step.hadoop_jar_step.properties": null,

  "aws.network_acl.ingress.from_port": null,
  "aws.network_acl.ingress.to_port": null,
  "aws.network_acl.ingress.rule_no": null,
  "aws.network_acl.ingress.action": null,
  "aws.network_acl.ingress.protocol": null,
  "aws.network_acl.ingress.cidr_block": null,
  "aws.network_acl.ingress.ipv6_cidr_block": null,
  "aws.network_acl.ingress.icmp_type": null,
  "aws.network_acl.ingress.icmp_code": null,
  "aws.network_acl.egress.from_port": null,
  "aws.network_acl.egress.to_port": null,
  "aws.network_acl.egress.rule_no": null,
  "aws.network_acl.egress.action": null,
  "aws.network_acl.egress.protocol": null,
  "aws.network_acl.egress.cidr_block": null,
  "aws.network_acl.egress.ipv6_cidr_block": null,
  "aws.network_acl.egress.icmp_type": null,
  "aws.network_acl.egress.icmp_code": null,

  "aws.route_table.route.cidr_block": null,
  "aws.route_table.route.ipv6_cidr_block": null,
  "aws.route_table.route.egress_only_gateway_id": null,
  "aws.route_table.route.gateway_id": null,
  "aws.route_table.route.instance_id": null,
  "aws.route_table.route.nat_gateway_id": null,
  "aws.route_table.route.local_gateway_id": null,
  "aws.route_table.route.network_interface_id": null,
  "aws.route_table.route.transit_gateway_id": null,
  "aws.route_table.route.vpc_endpoint_id": null,
  "aws.route_table.route.vpc_peering_connection_id": null,
  "aws.route_table.route.destination_prefix_list_id": null,
  "aws.route_table.route.carrier_gateway_id": null,
  "aws.route_table.route.core_network_arn": null,

  "aws.default_security_group.ingress.cidr_blocks": null,
  "aws.default_security_group.ingress.description": null,
  "aws.default_security_group.ingress.from_port": null,
  "aws.default_security_group.ingress.ipv6_cidr_blocks": null,
  "aws.default_security_group.ingress.prefix_list_ids": null,
  "aws.default_security_group.ingress.protocol": null,
  "aws.default_security_group.ingress.security_groups": null,
  "aws.default_security_group.ingress.self": null,
  "aws.default_security_group.ingress.to_port": null,
  "aws.default_security_group.egress.cidr_blocks": null,
  "aws.default_security_group.egress.description": null,
  "aws.default_security_group.egress.from_port": null,
  "aws.default_security_group.egress.ipv6_cidr_blocks": null,
  "aws.default_security_group.egress.prefix_list_ids": null,
  "aws.default_security_group.egress.protocol": null,
  "aws.default_security_group.egress.security_groups": null,
  "aws.default_security_group.egress.self": null,
  "aws.default_security_group.egress.to_port": null,

  "azuread.application.app_role.id": null,
  "azuread.application.app_role.allowed_member_types": null,
  "azuread.application.app_role.description": null,
  "azuread.application.app_role.display_name": null,
  "azuread.application.app_role.is_enabled": null,
  "azuread.application.app_role.value": null,
  "azuread.application.oauth2_permissions.id": null,
  "azuread.application.oauth2_permissions.admin_consent_description": null,
  "azuread.application.oauth2_permissions.admin_consent_display_name": null,
  "azuread.application.oauth2_permissions.value": null,
  "azuread.application.oauth2_permissions.type": null,
  "azuread.application.oauth2_permissions.is_enabled": null,
  "azuread.application.oauth2_permissions.user_consent_description": null,
  "azuread.application.oauth2_permissions.user_consent_display_name": null,

  "azurestack.route_table.route.name": null,
  "azurestack.route_table.route.address_prefix": null,
  "azurestack.route_table.route.next_hop_type": null,
  "azurestack.route_table.route.next_hop_in_ip_address": null,

  "azurestack.network_security_group.security_rule.name": null,
  "azurestack.network_security_group.security_rule.description": null,
  "azurestack.network_security_group.security_rule.protocol": null,
  "azurestack.network_security_group.security_rule.source_port_range": null,
  "azurestack.network_security_group.security_rule.source_port_ranges": null,
  "azurestack.network_security_group.security_rule.destination_port_range":
    null,
  "azurestack.network_security_group.security_rule.destination_port_ranges":
    null,
  "azurestack.network_security_group.security_rule.source_address_prefix": null,
  "azurestack.network_security_group.security_rule.source_address_prefixes":
    null,
  "azurestack.network_security_group.security_rule.destination_address_prefix":
    null,
  "azurestack.network_security_group.security_rule.destination_address_prefixes":
    null,
  "azurestack.network_security_group.security_rule.destination_application_security_group_ids":
    null,
  "azurestack.network_security_group.security_rule.source_application_security_group_ids":
    null,
  "azurestack.network_security_group.security_rule.access": null,
  "azurestack.network_security_group.security_rule.priority": null,
  "azurestack.network_security_group.security_rule.direction": null,

  "azurestack.virtual_network.subnet.name": null,
  "azurestack.virtual_network.subnet.address_prefix": null,
  "azurestack.virtual_network.subnet.security_group": null,
  "azurestack.virtual_network.subnet.id": null,

  "azurestack.key_vault.access_policy.tenant_id": null,
  "azurestack.key_vault.access_policy.object_id": null,
  "azurestack.key_vault.access_policy.application_id": null,
  "azurestack.key_vault.access_policy.certificate_permissions": null,
  "azurestack.key_vault.access_policy.key_permissions": null,
  "azurestack.key_vault.access_policy.secret_permissions": null,
  "azurestack.key_vault.access_policy.storage_permissions": null,

  "vault.auth_backend.tune.default_lease_ttl": null,
  "vault.auth_backend.tune.max_lease_ttl": null,
  "vault.auth_backend.tune.audit_non_hmac_request_keys": null,
  "vault.auth_backend.tune.audit_non_hmac_response_keys": null,
  "vault.auth_backend.tune.listing_visibility": null,
  "vault.auth_backend.tune.passthrough_request_headers": null,
  "vault.auth_backend.tune.allowed_response_headers": null,
  "vault.auth_backend.tune.token_type": null,

  "vault.github_auth_backend.tune.default_lease_ttl": null,
  "vault.github_auth_backend.tune.max_lease_ttl": null,
  "vault.github_auth_backend.tune.audit_non_hmac_request_keys": null,
  "vault.github_auth_backend.tune.audit_non_hmac_response_keys": null,
  "vault.github_auth_backend.tune.listing_visibility": null,
  "vault.github_auth_backend.tune.passthrough_request_headers": null,
  "vault.github_auth_backend.tune.allowed_response_headers": null,
  "vault.github_auth_backend.tune.token_type": null,

  "vault.jwt_auth_backend.tune.default_lease_ttl": null,
  "vault.jwt_auth_backend.tune.max_lease_ttl": null,
  "vault.jwt_auth_backend.tune.audit_non_hmac_request_keys": null,
  "vault.jwt_auth_backend.tune.audit_non_hmac_response_keys": null,
  "vault.jwt_auth_backend.tune.listing_visibility": null,
  "vault.jwt_auth_backend.tune.passthrough_request_headers": null,
  "vault.jwt_auth_backend.tune.allowed_response_headers": null,
  "vault.jwt_auth_backend.tune.token_type": null,

  "vault.okta_auth_backend.group.group_name": null,
  "vault.okta_auth_backend.group.policies": null,
  "vault.okta_auth_backend.user.username": null,
  "vault.okta_auth_backend.user.groups": null,
  "vault.okta_auth_backend.user.policies": null,

  "google.compute_instance.guest_accelerator.count": null,
  "google.compute_instance.guest_accelerator.type": null,

  "google.compute_instance_from_template.attached_disk.source": null,
  "google.compute_instance_from_template.attached_disk.device_name": null,
  "google.compute_instance_from_template.attached_disk.mode": null,
  "google.compute_instance_from_template.attached_disk.disk_encryption_key_raw":
    null,
  "google.compute_instance_from_template.attached_disk.kms_key_self_link": null,
  "google.compute_instance_from_template.guest_accelerator.count": null,
  "google.compute_instance_from_template.guest_accelerator.type": null,
  "google.compute_instance_from_template.service_account.email": null,
  "google.compute_instance_from_template.service_account.scopes": null,
  "google.compute_instance_from_template.scratch_disk.interface": null,
  "google.compute_instance_from_template.network_interface.alias_ip_range.ip_cidr_range":
    null,
  "google.compute_instance_from_template.network_interface.alias_ip_range.subnetwork_range_name":
    null,
  "google.compute_instance_from_template.network_interface.access_config.nat_ip":
    null,
  "google.compute_instance_from_template.network_interface.access_config.public_ptr_domain_name":
    null,
  "google.compute_instance_from_template.network_interface.access_config.network_tier":
    null,

  "google.compute_subnetwork.secondary_ip_range.range_name": null,
  "google.compute_subnetwork.secondary_ip_range.ip_cidr_range": null,

  "google.container_cluster.node_config.guest_accelerator.count": null,
  "google.container_cluster.node_config.guest_accelerator.type": null,
  "google.container_cluster.node_config.guest_accelerator.gpu_partition_size":
    null,
  "google.container_cluster.node_config.guest_accelerator.gpu_sharing_config":
    null,
  "google.container_cluster.node_config.guest_accelerator.gpu_sharing_config.gpu_sharing_strategy":
    null,
  "google.container_cluster.node_config.guest_accelerator.gpu_sharing_config.max_shared_clients_per_gpu":
    null,
  "google.container_cluster.node_config.taint.key": null,
  "google.container_cluster.node_config.taint.value": null,
  "google.container_cluster.node_config.taint.effect": null,

  "google.container_node_pool.node_config.guest_accelerator.count": null,
  "google.container_node_pool.node_config.guest_accelerator.type": null,
  "google.container_node_pool.node_config.guest_accelerator.gpu_partition_size":
    null,
  "google.container_node_pool.node_config.guest_accelerator.gpu_sharing_config":
    null,
  "google.container_node_pool.node_config.guest_accelerator.gpu_sharing_config.gpu_sharing_strategy":
    null,
  "google.container_node_pool.node_config.guest_accelerator.gpu_sharing_config.max_shared_clients_per_gpu":
    null,
  "google.container_node_pool.node_config.taint.key": null,
  "google.container_node_pool.node_config.taint.value": null,
  "google.container_node_pool.node_config.taint.effect": null,

  "google.composer_environment.ip_allocation_policy.use_ip_aliases": null,
  "google.composer_environment.ip_allocation_policy.cluster_secondary_range_name":
    null,
  "google.composer_environment.ip_allocation_policy.services_secondary_range_name":
    null,
  "google.composer_environment.ip_allocation_policy.cluster_ipv4_cidr_block":
    null,
  "google.composer_environment.ip_allocation_policy.services_ipv4_cidr_block":
    null,

  "azurerm.eventgrid_topic.inbound_ip_rule.ip_mask": null,
  "azurerm.eventgrid_topic.inbound_ip_rule.action": null,

  "azurerm.eventgrid_domain.inbound_ip_rule.ip_mask": null,
  "azurerm.eventgrid_domain.inbound_ip_rule.action": null,

  "azurerm.container_registry.network_rule_set.default_action": null,
  "azurerm.container_registry.network_rule_set.ip_rule": null,
  "azurerm.container_registry.network_rule_set.virtual_network": null,
  "azurerm.container_registry.network_rule_set.ip_rule.action": null,
  "azurerm.container_registry.network_rule_set.ip_rule.ip_range": null,
  "azurerm.container_registry.network_rule_set.virtual_network.action": null,
  "azurerm.container_registry.network_rule_set.virtual_network.subnet_id": null,
  "azurerm.container_registry.retention_policy.days": null,
  "azurerm.container_registry.retention_policy.enabled": null,
  "azurerm.container_registry.trust_policy.enabled": null,
  "azurerm.container_registry.encryption.enabled": null,
  "azurerm.container_registry.encryption.identity_client_id": null,
  "azurerm.container_registry.encryption.key_vault_key_id": null,

  "azurerm.eventhub_namespace.network_rulesets.default_action": null,
  "azurerm.eventhub_namespace.network_rulesets.public_network_access_enabled":
    null,
  "azurerm.eventhub_namespace.network_rulesets.trusted_service_access_enabled":
    null,
  "azurerm.eventhub_namespace.network_rulesets.virtual_network_rule": null,
  "azurerm.eventhub_namespace.network_rulesets.virtual_network_rule.subnet_id":
    null,
  "azurerm.eventhub_namespace.network_rulesets.virtual_network_rule.ignore_missing_virtual_network_service_endpoint":
    null,
  "azurerm.eventhub_namespace.network_rulesets.ip_rule": null,
  "azurerm.eventhub_namespace.network_rulesets.ip_rule.ip_mask": null,
  "azurerm.eventhub_namespace.network_rulesets.ip_rule.action": null,

  "azurerm.automation_runbook.job_schedule.schedule_name": null,
  "azurerm.automation_runbook.job_schedule.parameters": null,
  "azurerm.automation_runbook.job_schedule.run_on": null,
  "azurerm.automation_runbook.job_schedule.job_schedule_id": null,

  "azurerm.mssql_database.extended_auditing_policy.storage_account_access_key":
    null,
  "azurerm.mssql_database.extended_auditing_policy.storage_endpoint": null,
  "azurerm.mssql_database.extended_auditing_policy.storage_account_access_key_is_secondary":
    null,
  "azurerm.mssql_database.extended_auditing_policy.retention_in_days": null,
  "azurerm.mssql_database.extended_auditing_policy.log_monitoring_enabled":
    null,

  "azurerm.mssql_server.extended_auditing_policy.storage_account_access_key":
    null,
  "azurerm.mssql_server.extended_auditing_policy.storage_endpoint": null,
  "azurerm.mssql_server.extended_auditing_policy.storage_account_access_key_is_secondary":
    null,
  "azurerm.mssql_server.extended_auditing_policy.retention_in_days": null,
  "azurerm.mssql_server.extended_auditing_policy.log_monitoring_enabled": null,

  "azurerm.route_filter.rule.access": null,
  "azurerm.route_filter.rule.communities": null,
  "azurerm.route_filter.rule.name": null,
  "azurerm.route_filter.rule.rule_type": null,

  "azurerm.route_table.route.name": null,
  "azurerm.route_table.route.address_prefix": null,
  "azurerm.route_table.route.next_hop_type": null,
  "azurerm.route_table.route.next_hop_in_ip_address": null,

  "azurerm.site_recovery_replicated_vm.managed_disk.disk_id": null,
  "azurerm.site_recovery_replicated_vm.managed_disk.staging_storage_account_id":
    null,
  "azurerm.site_recovery_replicated_vm.managed_disk.target_resource_group_id":
    null,
  "azurerm.site_recovery_replicated_vm.managed_disk.target_disk_type": null,
  "azurerm.site_recovery_replicated_vm.managed_disk.target_replica_disk_type":
    null,
  "azurerm.site_recovery_replicated_vm.managed_disk.target_disk_encryption_set_id":
    null,
  "azurerm.site_recovery_replicated_vm.managed_disk.target_disk_encryption":
    null,
  "azurerm.site_recovery_replicated_vm.network_interface.source_network_interface_id":
    null,
  "azurerm.site_recovery_replicated_vm.network_interface.target_static_ip":
    null,
  "azurerm.site_recovery_replicated_vm.network_interface.target_subnet_name":
    null,
  "azurerm.site_recovery_replicated_vm.network_interface.recovery_public_ip_address_id":
    null,

  "azurerm.iothub.endpoint.type": null,
  "azurerm.iothub.endpoint.authentication_type": null,
  "azurerm.iothub.endpoint.identity_id": null,
  "azurerm.iothub.endpoint.endpoint_uri": null,
  "azurerm.iothub.endpoint.entity_path": null,
  "azurerm.iothub.endpoint.connection_string": null,
  "azurerm.iothub.endpoint.name": null,
  "azurerm.iothub.endpoint.batch_frequency_in_seconds": null,
  "azurerm.iothub.endpoint.max_chunk_size_in_bytes": null,
  "azurerm.iothub.endpoint.container_name": null,
  "azurerm.iothub.endpoint.encoding": null,
  "azurerm.iothub.endpoint.file_name_format": null,
  "azurerm.iothub.endpoint.resource_group_name": null,
  "azurerm.iothub.route.name": null,
  "azurerm.iothub.route.source": null,
  "azurerm.iothub.route.condition": null,
  "azurerm.iothub.route.endpoint_names": null,
  "azurerm.iothub.route.enabled": null,
  "azurerm.iothub.enrichment.key": null,
  "azurerm.iothub.enrichment.value": null,
  "azurerm.iothub.enrichment.endpoint_names": null,

  "azurerm.virtual_network.subnet.name": null,
  "azurerm.virtual_network.subnet.address_prefix": null,
  "azurerm.virtual_network.subnet.security_group": null,
  "azurerm.virtual_network.subnet.id": null,

  "azurerm.network_security_group.security_rule.name": null,
  "azurerm.network_security_group.security_rule.description": null,
  "azurerm.network_security_group.security_rule.protocol": null,
  "azurerm.network_security_group.security_rule.source_port_range": null,
  "azurerm.network_security_group.security_rule.source_port_ranges": null,
  "azurerm.network_security_group.security_rule.destination_port_range": null,
  "azurerm.network_security_group.security_rule.destination_port_ranges": null,
  "azurerm.network_security_group.security_rule.source_address_prefix": null,
  "azurerm.network_security_group.security_rule.source_address_prefixes": null,
  "azurerm.network_security_group.security_rule.destination_address_prefix":
    null,
  "azurerm.network_security_group.security_rule.destination_address_prefixes":
    null,
  "azurerm.network_security_group.security_rule.destination_application_security_group_ids":
    null,
  "azurerm.network_security_group.security_rule.source_application_security_group_ids":
    null,
  "azurerm.network_security_group.security_rule.access": null,
  "azurerm.network_security_group.security_rule.priority": null,
  "azurerm.network_security_group.security_rule.direction": null,

  "azurerm.synapse_workspace.aad_admin.login": null,
  "azurerm.synapse_workspace.aad_admin.object_id": null,
  "azurerm.synapse_workspace.aad_admin.tenant_id": null,
  "azurerm.synapse_workspace.sql_aad_admin.login": null,
  "azurerm.synapse_workspace.sql_aad_admin.object_id": null,
  "azurerm.synapse_workspace.sql_aad_admin.tenant_id": null,

  "azurerm.batch_pool.container_configuration.container_registries.registry_server":
    null,
  "azurerm.batch_pool.container_configuration.container_registries.user_name":
    null,
  "azurerm.batch_pool.container_configuration.container_registries.password":
    null,

  "azurerm.key_vault.access_policy.tenant_id": null,
  "azurerm.key_vault.access_policy.object_id": null,
  "azurerm.key_vault.access_policy.application_id": null,
  "azurerm.key_vault.access_policy.certificate_permissions": null,
  "azurerm.key_vault.access_policy.key_permissions": null,
  "azurerm.key_vault.access_policy.secret_permissions": null,
  "azurerm.key_vault.access_policy.storage_permissions": null,

  "azurerm.app_service.ip_restriction.ip_address": null,
  "azurerm.app_service.ip_restriction.service_tag": null,
  "azurerm.app_service.ip_restriction.subnet_id": null,
  "azurerm.app_service.ip_restriction.virtual_network_subnet_id": null,
  "azurerm.app_service.ip_restriction.name": null,
  "azurerm.app_service.ip_restriction.priority": null,
  "azurerm.app_service.ip_restriction.action": null,
  "azurerm.app_service.ip_restriction.headers": null,
  "azurerm.app_service.ip_restriction.headers.x_forwarded_host": null,
  "azurerm.app_service.ip_restriction.headers.x_forwarded_for": null,
  "azurerm.app_service.ip_restriction.headers.x_azure_fdid": null,
  "azurerm.app_service.ip_restriction.headers.x_fd_health_probe": null,
  "azurerm.app_service.scm_ip_restriction.ip_address": null,
  "azurerm.app_service.scm_ip_restriction.service_tag": null,
  "azurerm.app_service.scm_ip_restriction.subnet_id": null,
  "azurerm.app_service.scm_ip_restriction.virtual_network_subnet_id": null,
  "azurerm.app_service.scm_ip_restriction.name": null,
  "azurerm.app_service.scm_ip_restriction.priority": null,
  "azurerm.app_service.scm_ip_restriction.action": null,
  "azurerm.app_service.scm_ip_restriction.headers": null,
  "azurerm.app_service.scm_ip_restriction.headers.x_forwarded_host": null,
  "azurerm.app_service.scm_ip_restriction.headers.x_forwarded_for": null,
  "azurerm.app_service.scm_ip_restriction.headers.x_azure_fdid": null,
  "azurerm.app_service.scm_ip_restriction.headers.x_fd_health_probe": null,

  "azurerm.function_app.ip_restriction.ip_address": null,
  "azurerm.function_app.ip_restriction.service_tag": null,
  "azurerm.function_app.ip_restriction.subnet_id": null,
  "azurerm.function_app.ip_restriction.virtual_network_subnet_id": null,
  "azurerm.function_app.ip_restriction.name": null,
  "azurerm.function_app.ip_restriction.priority": null,
  "azurerm.function_app.ip_restriction.action": null,
  "azurerm.function_app.ip_restriction.headers": null,
  "azurerm.function_app.ip_restriction.headers.x_forwarded_host": null,
  "azurerm.function_app.ip_restriction.headers.x_forwarded_for": null,
  "azurerm.function_app.ip_restriction.headers.x_azure_fdid": null,
  "azurerm.function_app.ip_restriction.headers.x_fd_health_probe": null,
  "azurerm.function_app.scm_ip_restriction.ip_address": null,
  "azurerm.function_app.scm_ip_restriction.service_tag": null,
  "azurerm.function_app.scm_ip_restriction.subnet_id": null,
  "azurerm.function_app.scm_ip_restriction.virtual_network_subnet_id": null,
  "azurerm.function_app.scm_ip_restriction.name": null,
  "azurerm.function_app.scm_ip_restriction.priority": null,
  "azurerm.function_app.scm_ip_restriction.action": null,
  "azurerm.function_app.scm_ip_restriction.headers": null,
  "azurerm.function_app.scm_ip_restriction.headers.x_forwarded_host": null,
  "azurerm.function_app.scm_ip_restriction.headers.x_forwarded_for": null,
  "azurerm.function_app.scm_ip_restriction.headers.x_azure_fdid": null,
  "azurerm.function_app.scm_ip_restriction.headers.x_fd_health_probe": null,

  "azurerm.logic_app_standard.ip_restriction.ip_address": null,
  "azurerm.logic_app_standard.ip_restriction.service_tag": null,
  "azurerm.logic_app_standard.ip_restriction.subnet_id": null,
  "azurerm.logic_app_standard.ip_restriction.virtual_network_subnet_id": null,
  "azurerm.logic_app_standard.ip_restriction.name": null,
  "azurerm.logic_app_standard.ip_restriction.priority": null,
  "azurerm.logic_app_standard.ip_restriction.action": null,
  "azurerm.logic_app_standard.ip_restriction.headers": null,
  "azurerm.logic_app_standard.ip_restriction.headers.x_forwarded_host": null,
  "azurerm.logic_app_standard.ip_restriction.headers.x_forwarded_for": null,
  "azurerm.logic_app_standard.ip_restriction.headers.x_azure_fdid": null,
  "azurerm.logic_app_standard.ip_restriction.headers.x_fd_health_probe": null,
  "azurerm.logic_app_standard.scm_ip_restriction.ip_address": null,
  "azurerm.logic_app_standard.scm_ip_restriction.service_tag": null,
  "azurerm.logic_app_standard.scm_ip_restriction.subnet_id": null,
  "azurerm.logic_app_standard.scm_ip_restriction.virtual_network_subnet_id":
    null,
  "azurerm.logic_app_standard.scm_ip_restriction.name": null,
  "azurerm.logic_app_standard.scm_ip_restriction.priority": null,
  "azurerm.logic_app_standard.scm_ip_restriction.action": null,
  "azurerm.logic_app_standard.scm_ip_restriction.headers": null,
  "azurerm.logic_app_standard.scm_ip_restriction.headers.x_forwarded_host":
    null,
  "azurerm.logic_app_standard.scm_ip_restriction.headers.x_forwarded_for": null,
  "azurerm.logic_app_standard.scm_ip_restriction.headers.x_azure_fdid": null,
  "azurerm.logic_app_standard.scm_ip_restriction.headers.x_fd_health_probe":
    null,

  "azurerm.api_management.policy.xml_content": null,
  "azurerm.api_management.policy.xml_link": null,

  "azurerm.container_group.exposed_port.port": null,
  "azurerm.container_group.exposed_port.protocol": null,
};
