export default {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    feed_name: {
      type: 'string',
      default: 'test_text',
    },
    priority: {
      type: 'string',
      enum: ['high', 'mid', 'low'],
      default: 'low',
    },
    catalogs: {
      type: 'array',
      items: {
        type: 'string',
        enum: ['fashion', 'diy', 'hd', 'general'],
        default: 'general',
      },
    },
    customer_name: {
      type: 'string',
    },
    worker_env: {
      type: 'string',
      default: 'argo',
    },
    index_config: {
      type: 'object',
      properties: {
        uniq_by_field: {
          type: 'string',
          default: 'parent_sku',
        },
      },
    },
    steps: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          download: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
              },
              host: {
                type: 'string',
              },
              port: {
                type: 'integer',
              },
              path: {
                type: 'string',
              },
              username: {
                type: 'string',
              },
              password: {
                type: 'string',
              },
              mandatory: {
                type: 'boolean',
              },
              latest: {
                type: 'boolean',
              },
              pattern: {
                type: 'boolean',
              },
              files: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    src: {
                      type: 'string',
                    },
                    dest: {
                      type: 'string',
                    },
                  },
                },
              },
            },
          },
          preprocess: {
            type: 'object',
          },
          feed_diff: {
            type: 'object',
          },
          tagit: {
            type: 'object',
          },
          feeder: {
            type: 'object',
            properties: {
              partitions: {
                type: 'string',
              },
              general_protobuf: {
                type: 'boolean',
              },
              feeds: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    feed: {
                      type: 'string',
                    },
                    feed_file: {
                      type: 'string',
                    },
                    clean_duplicates: {
                      type: 'boolean',
                    },
                    plugs_config: {
                      type: 'string',
                    },
                    use_categories_fallback: {
                      type: 'string',
                    },
                    use_last_pb: {
                      type: 'boolean',
                    },
                    use_bounds: {
                      type: 'string',
                    },
                    use_images_to_ctl: {
                      type: 'string',
                    },
                    indices: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          type: {
                            type: 'string',
                          },
                          feeder_configs: {
                            type: 'array',
                            items: {
                              type: 'object',
                              properties: {
                                name: {
                                  type: 'string',
                                },
                                categories_file: {
                                  type: 'string',
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          apply_diff: {
            type: 'object',
          },
          cluster: {
            type: 'object',
            properties: {
              indices: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            },
          },
          index_centroids: {
            type: 'object',
          },
          index_protofiles: {
            type: 'object',
          },
          count_centroids: {
            type: 'object',
          },
          deploy: {
            type: 'object',
            properties: {
              cloud: {
                type: 'string',
              },
            },
          },
          update_index_list: {
            type: 'object',
            properties: {
              container: {
                type: 'string',
              },
              generate_feed_analysis: {
                type: 'boolean',
              },
            },
          },
          remove_old_index_references: {
            type: 'object',
          },
        },
        minItems: 1,
      },
    },
    csv_configs: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          csv_config_name: {
            type: 'string',
          },
          csv_file_name: {
            type: 'string',
          },
          check_difference_processed_size: {
            type: 'boolean',
          },
          genders: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                feeder_configs: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      categories_file_path: {
                        type: 'string',
                      },
                      feeder_config_name: {
                        type: 'string',
                      },
                    },
                  },
                },
                gender_name: {
                  type: 'string',
                },
              },
            },
          },
          plugs_config_path: {
            type: 'string',
          },
          preprocessors: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                preprocess_files: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      configuration: {
                        type: 'object',
                      },
                      module_name: {
                        type: 'string',
                      },
                    },
                  },
                },
                preprocess_rows: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      module_name: {
                        type: 'string',
                      },
                      configuration: {
                        type: 'object',
                      },
                    },
                  },
                },
              },
            },
          },
          use_categories_fallback: {
            type: 'string',
          },
          use_images_to_ctl: {
            type: 'string',
          },
          use_last_pb: {
            type: 'boolean',
          },
        },
      },
    },
  },
};
